import React from 'react';
import { StyledFilters, Option } from './styled/Filters.styled';
import SearchBar from './SearchBar';

export default function Filters(props) {
  const handleChange = (mealType) => {
    console.log(mealType);
  };

  return (
    <StyledFilters>
      <Option onClick={() => handleChange('breakfast')}>
        <p>Breakfast</p>
      </Option>
      <Option onClick={() => handleChange('main course')}>
        <p>Main Course</p>
      </Option>
      <Option onClick={() => handleChange('dessert')}>
        <p>Dessert</p>
      </Option>
      <Option onClick={() => handleChange('snack')}>
        <p>Snack</p>
      </Option>
      <SearchBar />
    </StyledFilters>
  );
}
