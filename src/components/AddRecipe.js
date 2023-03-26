import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddEvent(props) {
  const [formData, setFormData] = React.useState({
    title: '',
    servings: '',
    ingredients: '',
    summary: '',
    instructions: '',
    dishType: '',
    readyInMinutes: '',
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/yourRecipes');
  }

  return (
    <div>
      <form className='form--event' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          className='form--event--input'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Servings'
          className='form--event--input'
          name='servings'
          value={formData.servings}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Ingredients'
          className='form--event--input'
          name='ingredients'
          value={formData.ingredients}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Summary'
          className='form--event--input'
          name='summary'
          value={formData.summary}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Instructions'
          className='form--event--input'
          name='instructions'
          value={formData.instructions}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Dish type'
          className='form--event--input'
          name='dish_type'
          value={formData.dish_type}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Ready in'
          className='form--event--input'
          name='ready_in'
          value={formData.ready_in}
          onChange={handleChange}
        />

        <button className='form--event--button'>Add recipe</button>
      </form>
    </div>
  );
}
