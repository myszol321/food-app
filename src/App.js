import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './components/styled/Global';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Favourites from './components/Favourites';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/favourites' element={<Favourites />} />
          <Route path='/recipe' element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
