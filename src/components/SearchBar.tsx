export default function SearchBar() {
  return (
    <>
      <label htmlFor="ingredient">Ingrediente</label>
      <input
        type="radio"
        name="ingredient"
        data-testid="ingredient-search-radio"
      />
      <label htmlFor="name">Nome</label>
      <input
        type="radio"
        name="name"
        data-testid="name-search-radio"
      />
      <label htmlFor="first-letter">Primeira Letra</label>
      <input
        type="radio"
        name="first-letter"
        data-testid="first-letter-search-radio"
      />
      <button data-testid="exec-search-btn">
        Buscar
      </button>
    </>
  );
}
