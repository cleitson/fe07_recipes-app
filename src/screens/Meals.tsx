import { useContext } from 'react';
import recipeAppContext from '../context/recipeAppContext';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import MealCard from '../components/MealCard/MealCard';

export default function Meals() {
  const { apiData, loading } = useContext(recipeAppContext);

  const transformedMeals = (apiData?.meals || []).map((meal) => ({
    idMeal: meal.idMeal || '',
    strMeal: meal.strMeal || '',
    strMealThumb: meal.strMealThumb || '',
  }));

  return (
    <>
      <Header />
      {loading ? (<p>Loading...</p>) : (<MealCard recipes={ transformedMeals } />) }
      <Footer />
    </>
  );
}
