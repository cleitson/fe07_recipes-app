import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login';
import Meals from './screens/Meals';
import Profile from './screens/Profile';
import FavoriteRecipes from './screens/FavoriteRecipes';
import Drinks from './screens/Drinks';
import DoneRecipes from './screens/DoneRecipes';
import NotFound from './components/NotFound';

function App() {
  return (
    // Rotas;
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/meals" element={ <Meals /> } />
      <Route path="/done-recipes" element={ <DoneRecipes /> } />
      <Route path="/drinks" element={ <Drinks /> } />
      <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
