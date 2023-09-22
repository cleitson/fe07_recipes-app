import { render, screen } from '@testing-library/react';
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
});
