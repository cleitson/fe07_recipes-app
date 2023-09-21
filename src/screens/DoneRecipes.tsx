// Componente da tela principal de receitas de comidas;
import profileIcon from '../images/profileIcon.svg';

export default function DoneRecipes() {
  return (
    <header>
      <h1 data-testid="page-title">Done Recipes</h1>
      <img src={ profileIcon } alt="Profile icon" data-testid="profile-top-btn" />
    </header>
  );
}
