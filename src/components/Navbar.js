import React from 'react';
import { Nav } from './styled/Navbar.styled';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate(`/`);
  };
  const goToYourPage = () => {
    navigate(`/yourRecipes`);
  };

  return (
    <Nav>
      <h1 onClick={goToHomePage}>Food</h1>
      <h2 onClick={goToYourPage}>Your recipes</h2>
    </Nav>
  );
}
