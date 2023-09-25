import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, JSXElementConstructor } from 'react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import Profile from '../screens/Profile';

describe('Teste da tela Profile', () => {
  test('Teste se o título está correto', () => {
    renderWithRouter(<App />, { route: '/profile' });
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Profile');
  });

  test('testa se o botão Done Recipes leva para a rota certa', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    const btnDoneRecipes = screen.getByRole('button', { name: /Done Recipes/i });
    fireEvent.click(btnDoneRecipes);

    expect(window.location.pathname).toBe('/done-recipes');
  });

  test('testa se o botão Favorites leva para a rota certa', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    const btnFavorites = screen.getByRole('button', { name: /Favorite Recipes/i });
    fireEvent.click(btnFavorites);

    expect(window.location.pathname).toBe('/favorite-recipes');
  });

  test('testa se o botão logout leva para a rota certa e limpa o localStorage', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    const btnLogout = screen.getByRole('button', { name: /Logout/i });
    fireEvent.click(btnLogout);

    expect(window.location.pathname).toBe('/');
  });
});
