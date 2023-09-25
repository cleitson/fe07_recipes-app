import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste da tela Done Recipes', () => {
  test('Teste se o título está correto', () => {
    renderWithRouter(<App />, { route: '/done-recipes' });
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Done Recipes');
  });
});
