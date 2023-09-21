// Componente da tela principal de receitas de comidas;
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Meals() {
  return (
    <header>
      <h1 data-testid="page-title">Meals</h1>
      <img src={ profileIcon } alt="Profile icon" data-testid="profile-top-btn" />
      <div>
        <input
          type="search"
        />
        {' '}
        <button>
          <img src={ searchIcon } alt="Search icon" data-testid="search-top-btn" />
        </button>
      </div>
    </header>
  );
}
