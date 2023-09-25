import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste da tela Drinks', () => {
  test('Teste se o título está correto', () => {
    renderWithRouter(<App />, { route: '/drinks' });
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Drinks');
  });
});
