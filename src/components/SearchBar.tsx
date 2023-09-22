import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import recipeAppContext from '../context/recipeAppContext';
import { ApiType, SearchType } from '../types';

const searchInitialValue = {
  filter: '',
  search: '',
};

export default function SearchBar() {
  const [form, setForm] = useState<SearchType>(searchInitialValue);

  const navigate = useNavigate();

  const {
    fetchApiIngredient,
    fetchApiName,
    fetchApiFirstLetter,
    setLoading,
    apiData,
    setApiData,
  } = useContext(recipeAppContext);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
    if (form.filter === 'first-letter-filter' && form.search.length >= 1) {
      window.alert('Your search must have only 1 (one) character');
      setForm({ ...form, search: '' });
    }
  };

  const handleDataLength = (data: ApiType) => {
    if (data.meals && data.meals.length === 1) {
      navigate(`/meals/${data.meals[0].idMeal}`);
    }
    if (data.drinks && data.drinks.length === 1) {
      navigate(`/drinks/${data.drinks[0].idDrink}`);
    }
  };

  const handleSearch = async () => {
    let data;
    setLoading(true);
    switch (form.filter) {
      case 'ingredient-filter':
        data = await fetchApiIngredient(form.search);
        setApiData(data);
        handleDataLength(data);
        setLoading(false);
        break;

      case 'name-filter':
        data = await fetchApiName(form.search);
        setApiData(data);
        handleDataLength(data);
        setLoading(false);
        break;

      case 'first-letter-filter':
        data = await fetchApiFirstLetter(form.search);
        setApiData(data);
        handleDataLength(data);
        setLoading(false);
        break;

      default:
        return apiData;
    }
  };

  return (
    <>
      <input
        type="text"
        value={ form.search }
        name="search"
        data-testid="search-input"
        onChange={ handleChange }
      />
      <label>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="filter"
          value="ingredient-filter"
          onChange={ handleChange }
        />
        Ingrediente
      </label>
      <label>
        <input
          type="radio"
          data-testid="name-search-radio"
          name="filter"
          value="name-filter"
          onChange={ handleChange }
        />
        Nome
      </label>
      <label>
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="filter"
          value="first-letter-filter"
          onChange={ handleChange }
        />
        Primeira Letra
      </label>
      <button
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar
      </button>
    </>
  );
}
