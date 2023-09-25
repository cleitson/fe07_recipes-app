import React from 'react';
import './MealCard.css';
import { MealsType } from '../../types';

type CardProps = {
  recipes: MealsType[];
};

function MealCard({ recipes }: CardProps) {
  return (
    <div className="card-container">
      {recipes
        && recipes.length > 0
        && recipes.slice(0, 12).map(({ idMeal, strMeal, strMealThumb }, index) => (
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
