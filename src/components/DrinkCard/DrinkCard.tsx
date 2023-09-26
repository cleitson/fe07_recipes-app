import React, { useContext } from 'react';
import './DrinkCard.css';
import { DrinksType } from '../../types';
import recipeAppContext from '../../context/recipeAppContext';

function DrinkCard() {
  const { apiData, loading } = useContext(recipeAppContext);

  const transformedDrinks: DrinksType[] = (apiData?.drinks || []).map((drink) => ({
    idDrink: drink.idDrink || '',
    strDrink: drink.strDrink || '',
    strDrinkThumb: drink.strDrinkThumb || '',
  }));

  if (loading || !transformedDrinks.length) return <p>Loading...</p>;

  return (
    <div className="card-container">
      {transformedDrinks.slice(0, 12)
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
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
