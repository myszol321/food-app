import React from 'react';
import { FeedStyled } from './styled/Recipes.styled';
import { useEffect } from 'react';

import RecipeThumbnail from './RecipeThumbnail';

export default function Feed() {
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

  const entries = randomRecipes.map((recipe) => {
    return <RecipeThumbnail key={recipe.id} {...recipe} />;
  });

  return <FeedStyled>{entries}</FeedStyled>;
}
