import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import recipeAppContext from './recipeAppContext';
import { ApiType } from '../types';

type ContextProviderProps = {
  children: React.ReactNode,
};

export default function ContextProvider({ children }: ContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [apiData, setApiData] = useState<ApiType>({});

  const location = useLocation();
  const currentPath = location.pathname;

  const fetchApiIngredient = async (ingredient: string) => {
    if (currentPath === '/meals') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data;
    }
    if (currentPath === '/drinks') {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data;
    }
  };

  const fetchApiName = async (name: string) => {
    if (currentPath === '/meals') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      const data = await response.json();
      return data;
    }
    if (currentPath === '/drinks') {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const data = await response.json();
      return data;
    }
  };

  const fetchApiFirstLetter = async (firstLetter: string) => {
    if (currentPath === '/meals') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
      const data = await response.json();
      return data;
    }
    if (currentPath === '/drinks') {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
      const data = await response.json();
      return data;
    }
  };

  const value = {
    loading,
    setLoading,
    apiData,
    setApiData,
    fetchApiIngredient,
    fetchApiName,
    fetchApiFirstLetter,
  };

  return (
    <recipeAppContext.Provider value={ value }>
      {children}
    </recipeAppContext.Provider>
  );
}
