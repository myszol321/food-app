import React from 'react';
import { RecipeThumbnailStyled } from './styled/Recipes.styled';

export default function RecipeThumbnail(props) {
  const ingredients = props.extendedIngredients.map((ingredient) => {
    return <li>{ingredient.original}</li>;
  });
  return (
    <RecipeThumbnailStyled>
      <img className='thumbnail' src={props.image}></img>
      <h1>{props.title}</h1>
      <p>Preperation time: {props.readyInMinutes} min</p>
      <img className='heart' src='/empty-heart.png'></img>
    </RecipeThumbnailStyled>
  );
}
