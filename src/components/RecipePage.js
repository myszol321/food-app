import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledRecipePage } from './styled/Recipes.styled';

export default function RecipePage() {
  const [recipeInformation, setRecipeInformation] = useState({});
  let params = useParams();

  const getRecipe = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setRecipeInformation(data);
  };

  useEffect(() => {
    getRecipe(params.recipeId);
  }, [params.recipeId]);

  return (
    <StyledRecipePage>
      <div className='short-info'>
        <img src={recipeInformation.image}></img>
        <h1>{recipeInformation.title}</h1>
        <h2>servings: {recipeInformation.servings}</h2>

        <h3
          dangerouslySetInnerHTML={{ __html: recipeInformation.summary }}
        ></h3>
      </div>
      <div>
        <ul>
          {recipeInformation.extendedIngredients &&
            recipeInformation.extendedIngredients.map((ingredient) => (
              <li>{ingredient.original}</li>
            ))}
        </ul>
        <h3
          dangerouslySetInnerHTML={{ __html: recipeInformation.instructions }}
        ></h3>
      </div>
    </StyledRecipePage>
  );
}
