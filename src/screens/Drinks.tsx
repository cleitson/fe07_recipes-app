// Componente da tela principal de receitas de comidas;
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Drinks() {
  return (
    <div>
      <header>
        <h1 data-testid="page-title">Drinks</h1>
        <img src={ profileIcon } alt="Profile icon" data-testid="profile-top-btn" />
      </header>
      <div>
        <input
          type="search"
        />
        {' '}
        <button>
          <img src={ searchIcon } alt="Search icon" data-testid="search-top-btn" />
        </button>
      </div>
    </div>
  );
}
