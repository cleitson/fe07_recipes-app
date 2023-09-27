export type RecipeType = {
  loading: boolean,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>,
  apiData: ApiType,
  setApiData: React.Dispatch<React.SetStateAction<ApiType>>,
  fetchApiIngredient: (firstLetter: string) => Promise<ApiType>,
  fetchApiName: (firstLetter: string) => Promise<ApiType>,
  fetchApiFirstLetter: (firstLetter: string) => Promise<ApiType>,
};

export type ApiType = {
  [key: string]: [{
    [key: string]: string,
  },
  ]
};

export type SearchType = {
  filter: string,
  search: string,
};

export type MealsType = {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
};

export type DrinksType = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
};

export type DoneRecipeType = {
  id: string,
  type: string,
  nationality: string,
  category: string,
  alcoholicOrNot: string,
  name: string,
  image: string,
  doneDate: string,
  tags: string[]
};

export type FavoriteType = {
  id: string,
  type: string,
  nationality: string,
  category: string,
  alcoholicOrNot: string,
  name: string,
  image: string,
  doneDate: string,
  tags: string,
};
