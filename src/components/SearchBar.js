import React from 'react';
import { SearchBarStyled } from './styled/Filters.styled';

export default function SearchBar() {
  return (
    <SearchBarStyled>
      <input type='text' placeholder='Search...' />
      <button>
        <img src='/search.png'></img>
      </button>
    </SearchBarStyled>
  );
}
