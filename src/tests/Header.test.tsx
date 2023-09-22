import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste do componente Header', () => {
  test('Teste se há o icone profile', async () => {
    renderWithRouter(<App />, { route: '/' });
    const inputLogin = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /enter/i });
    await userEvent.type(inputLogin, 'test@test.com');
    await userEvent.type(inputPassword, '1234567');
    await userEvent.click(button);
    const profileIcon = screen.getByRole('img', { name: /search-icon/i });
    expect(profileIcon).toBeInTheDocument();
  });

  test('Teste se o ícone de perfil está presente quando o título é "Drinks"', () => {
    renderWithRouter(<App />, { route: '/drinks' });
    expect(screen.getByRole('img', { name: /search-icon/i })).toBeInTheDocument();
  });

  test('Teste se o título está correto', () => {
    renderWithRouter(<App />, { route: '/meals' });
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Meals');
  });

  test('Teste se o ícone de busca está presente quando o título é "Drinks"', () => {
    renderWithRouter(<App />, { route: '/drinks' });
    expect(screen.getByRole('img', { name: /search-icon/i })).toBeInTheDocument();
  });

  test('Teste se o clique no botão de perfil redireciona para a página de perfil', () => {
    renderWithRouter(<App />, { route: '/profile' });
    userEvent.click(screen.getByTestId('profile-top-btn'));
    expect(screen.getByTestId('page-title')).toHaveTextContent('Profile');
  });

  test('Teste se o searchIcon não está presente quando o título é "Profile"', () => {
    renderWithRouter(<App />, { route: '/profile' });
    expect(screen.queryByAltText('Search icon')).not.toBeInTheDocument();
  });

  test('Testa se o search-input HABILITA ao clicar no searchIcon', async () => {
    renderWithRouter(<App />, { route: '/drinks' });
    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);
    const searchInput = await screen.findByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  test('Testa se o search-input DESABILITA ao clicar no searchIcon', async () => {
    renderWithRouter(<App />, { route: '/drinks' });
    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);
    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument();
  });
});
