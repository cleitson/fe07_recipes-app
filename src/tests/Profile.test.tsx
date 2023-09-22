import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste da tela Profile', () => {
  test('Teste se o título está correto', () => {
    renderWithRouter(<App />, { route: '/profile' });
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Profile');
  });
});
