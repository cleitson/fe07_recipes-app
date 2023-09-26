import React, { useContext } from 'react';
import './MealCard.css';
import { MealsType } from '../../types';
import recipeAppContext from '../../context/recipeAppContext';

function MealCard() {
  const { apiData, loading } = useContext(recipeAppContext);

  const transformedMeals: MealsType[] = (apiData?.meals || []).map((meal) => ({
    idMeal: meal.idMeal || '',
    strMeal: meal.strMeal || '',
    strMealThumb: meal.strMealThumb || '',
  }));

  if (loading || !transformedMeals.length) return <p>Loading...</p>;

  return (
    <div className="card-container">
      {transformedMeals.slice(0, 12).map(({ idMeal, strMeal, strMealThumb }, index) => (
        <div
          key={ idMeal }
          data-testid={ `${index}-recipe-card` }
          className="card-item"
        >
          <img
            src={ strMealThumb }
            alt={ strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h2 data-testid={ `${index}-card-name` }>{strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default MealCard;
