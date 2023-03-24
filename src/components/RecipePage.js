import React from 'react';

function RecipePage(props) {
  const ingredients = props.extendedIngredients.map((ingredient) => {
    return <li>{ingredient.original}</li>;
  });
  return (
    <div>
      <div className='shot-info'>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <h2>servings: {props.servings}</h2>
      </div>
      <ul className='ingredients'>{ingredients}</ul>
      <div className='recipe'></div>
    </div>
  );
}

export default RecipePage;
