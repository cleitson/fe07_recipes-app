// Componente da tela principal de receitas de comidas;
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

export default function Profile() {
  const navigate = useNavigate();
  const email = localStorage.getItem('user');

  const handleDoneRecipes = () => {
    navigate('/done-recipes');
  };

  const handleFavoritesRecipes = () => {
    navigate('/favorite-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <p>
        Email:
        {' '}
        <span data-testid="profile-email">
          {email}
          {' '}
        </span>
      </p>
      <button
        onClick={ handleDoneRecipes }
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      {' '}
      <button
        onClick={ handleFavoritesRecipes }
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      {' '}
      <button
        onClick={ handleLogout }
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <div>
        <Footer />
      </div>
    </>
  );
}
