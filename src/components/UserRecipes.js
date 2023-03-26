import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import RecipeThumbnail from './RecipeThumbnail';

export default function UserRecipes() {
  const navigate = useNavigate('');

  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);

  const addRecipe = () => {
    navigate(`/addRecipe`);
  };

  const getRecipes = () => {
    var favouriteRecipesJSON = localStorage.getItem('favourites');
    if (favouriteRecipesJSON !== null) {
      setFavouriteRecipes(JSON.parse(favouriteRecipesJSON));
    }

    var userRecipesJSON = localStorage.getItem('users');
    if (userRecipesJSON !== null) {
      setUserRecipes(JSON.parse(userRecipesJSON));
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <div className='favourites'>
        {favouriteRecipes.map((recipe) => (
          <RecipeThumbnail key={recipe.id} {...recipe} />
        ))}
      </div>
      <div className='users'>
        {userRecipes.map((recipe) => (
          <RecipeThumbnail key={recipe.id} {...recipe} />
        ))}
        <button onClick={addRecipe}>Add new recipe</button>
      </div>
    </div>
  );
}
