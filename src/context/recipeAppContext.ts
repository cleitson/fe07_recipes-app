import { createContext } from 'react';
import { RecipeType } from '../types';

const recipeAppContext = createContext({} as RecipeType);

export default recipeAppContext;
