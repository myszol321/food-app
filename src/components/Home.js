import React from 'react';
import { HomeStyled } from './styled/Home.styled';
import Filters from './Filters';
import Feed from './Feed';

export default function Home() {
  return (
    <HomeStyled>
      <Filters />
      <Feed />
    </HomeStyled>
  );
}
