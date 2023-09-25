import React from 'react';
import './DrinkCard.css';
import { DrinksType } from '../../types';

type CardProps = {
  recipes: DrinksType[];
};

function DrinkCard({ recipes }: CardProps) {
  return (
    <div className="card-container">
      {recipes
        && recipes.length > 0
        && recipes.slice(0, 12).map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <div
            key={ idDrink }
            data-testid={ `${index}-recipe-card` }
            className="card-item"
          >
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>{strDrink}</h2>
          </div>
        ))}
    </div>
  );
}

export default DrinkCard;
