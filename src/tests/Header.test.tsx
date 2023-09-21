import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ReactElement, JSXElementConstructor } from 'react';
import App from '../App';
import Header from '../components/Header';

function renderWithRouter(ui: ReactElement<any, string | JSXElementConstructor<any>>, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
}

describe('Teste do componente Header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const inputLogin = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const button = screen.getByRole('button', { name: /enter/i });

  test('Teste se há o icone profile', async () => {
    await userEvent.type(inputLogin, 'test@test.com');
    await userEvent.type(inputPassword, '1234567');
    await userEvent.click(button);
    const profileIcon = screen.getByAltText('Profile icon');
    expect(profileIcon).toBeInTheDocument();
  });

  test('Teste se o ícone de perfil está presente quando o título é "Drinks"', () => {
    renderWithRouter(<Header title="Drinks" />);
    expect(screen.getByAltText('Profile icon')).toBeInTheDocument();
  });

  test('Teste se o título está correto', () => {
    renderWithRouter(<Header title="Meals" />);
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Meals');
  });

  test('Teste se o ícone de busca está presente quando o título é "Drinks"', () => {
    renderWithRouter(<Header title="Drinks" />);
    expect(screen.getByAltText('Search icon')).toBeInTheDocument();
  });

  test('Teste se o clique no botão de perfil redireciona para a página de perfil', () => {
    renderWithRouter(<Header title="Profile" />);
    userEvent.click(screen.getByTestId('profile-top-btn'));
    expect(screen.getByTestId('page-title')).toHaveTextContent('Profile');
  });

  test('Teste se o searchIcon não está presente quando o título é "Profile"', () => {
    renderWithRouter(<Header title="Profile" />);
    expect(screen.queryByAltText('Search icon')).not.toBeInTheDocument();
  });

  test('Testa se o search-input HABILITA ao clicar no searchIcon', async () => {
    renderWithRouter(<Header title="Drinks" />);
    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);
    const searchInput = await screen.findByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  test('Testa se o search-input DESABILITA ao clicar no searchIcon', async () => {
    renderWithRouter(<Header title="Drinks" />);
    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);
    userEvent.click(searchButton);
    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument();
  });
});
