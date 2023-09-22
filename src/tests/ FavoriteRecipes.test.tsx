import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, JSXElementConstructor } from 'react';
import App from '../App';
import FavoriteRecipes from '../screens/FavoriteRecipes';

function renderWithRouter(ui: ReactElement<any, string | JSXElementConstructor<any>>, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
}

describe('Teste da tela Favorite Recipes', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  test('Teste se o título está correto', () => {
    renderWithRouter(<FavoriteRecipes />);
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Favorite Recipes');
  });
});