import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './components/styled/Global';

import Navbar from './components/Navbar';
import Home from './components/Home';
import UserRecipes from './components/UserRecipes';
import RecipePage from './components/RecipePage';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/yourRecipes' element={<UserRecipes />} />
          <Route exact path='/addRecipe' element={<AddRecipe />} />
          <Route path='/recipe/:recipeId' element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
