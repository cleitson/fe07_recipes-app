import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, JSXElementConstructor } from 'react';
import App from '../App';
import Profile from '../screens/Profile';

function renderWithRouter(ui: ReactElement<any, string | JSXElementConstructor<any>>, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
}

describe('Teste da tela Profile', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  test('Teste se o título está correto', () => {
    renderWithRouter(<Profile />);
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
