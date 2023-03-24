import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedStyled } from './styled/Recipes.styled';
import { useEffect } from 'react';

import RecipeThumbnail from './RecipeThumbnail';

export default function Feed() {
  let navigate = useNavigate();
  const [randomRecipes, setRandomRecipes] = React.useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
    );
    const data = await api.json();
    setRandomRecipes(data.recipes);
  };

  const openRecipe = () => {
    console.log('dupa');
    // navigate(`/recipe/${id}`);
  };

  const entries = randomRecipes.map((recipe) => {
    return <RecipeThumbnail key={recipe.id} onClick={openRecipe} {...recipe} />;
  });

  return <FeedStyled>{entries}</FeedStyled>;
}
