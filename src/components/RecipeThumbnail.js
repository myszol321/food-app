import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeThumbnailStyled } from './styled/Recipes.styled';

export default function RecipeThumbnail(props) {
  let navigate = useNavigate();

  const openRecipe = () => {
    navigate(`/recipe/${props.id}`);
  };

  const addToFavourites = (event) => {
    event.stopPropagation();
    const favourites = localStorage.getItem('favourites');

    if (favourites !== null) {
      let favObj = JSON.parse(favourites);
      console.log(typeof favObj);

      const favSet = new Set();
      for (const element in favObj) {
        favSet.add(element);
      }
      localStorage.setItem('favourites', JSON.stringify(favSet));
    } else {
      localStorage.setItem('favourites', `{${props.id}}`);
    }
  };

  return (
    <RecipeThumbnailStyled onClick={() => openRecipe()}>
      <img className='thumbnail' src={props.image}></img>
      <h1>{props.title}</h1>
      <p>Preperation time: {props.readyInMinutes} min</p>
      <img
        className='heart'
        src='/empty-heart.png'
        onClick={(event) => addToFavourites(event)}
      ></img>
    </RecipeThumbnailStyled>
  );
}
