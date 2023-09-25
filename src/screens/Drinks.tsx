// Componente da tela principal de receitas de comidas;
import { useContext } from 'react';
import DrinkCard from '../components/DrinkCard/DrinkCard';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import recipeAppContext from '../context/recipeAppContext';

export default function Drinks() {
  const { apiData, loading } = useContext(recipeAppContext);

  const transformedDrinks = (apiData?.drinks || []).map((drink) => ({
    idDrink: drink.idDrink || '',
    strDrink: drink.strDrink || '',
    strDrinkThumb: drink.strDrinkThumb || '',
  }));

  console.log(transformedDrinks);

  return (
    <>
      <Header />
      {loading ? <p>Loading...</p> : <DrinkCard recipes={ transformedDrinks } />}
      <Footer />
    </>
  );
}
