import { useContext, useEffect, useMemo, useState } from 'react';
import recipeAppContext from '../context/recipeAppContext';
import { MealsType } from '../types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

export default function Meals() {
  const { apiData, loading } = useContext(recipeAppContext);
  const [newData, setNewData] = useState<MealsType[]>([]);

  // useEffect(() => {
  //   const handleNewData = async () => {
  //     if (apiData.meals) {
  //       const data = apiData.meals.slice(0, 12);
  //       setNewData(data as MealsType[]);
  //     }
  //   };
  //   handleNewData();
  // }, [apiData.meals]);

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        newData.map(({ idMeal, stringMeal, stringMealThumb }, index) => (
          <div key={ idMeal } data-testid={ `${index}-recipe-card` }>
            <p data-testeid={ `${index}-card-name` }>{stringMeal}</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ stringMealThumb }
              alt={ stringMeal }
            />
          </div>
        ))
      )}
      <Footer />
    </>
  );
}
