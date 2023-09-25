import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste da tela Favorite Recipes', () => {
  test('Teste se o título está correto', () => {
    renderWithRouter(<App />, { route: '/favorite-recipes' });
    const pageTitle = screen.getByRole('heading', { name: /favorite recipes/i });
    expect(pageTitle).toHaveTextContent('Favorite Recipes');
  });
});
