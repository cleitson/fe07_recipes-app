import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste da tela de login', () => {
  it('checks if the button is enabled', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const inputLogin = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /enter/i });

    await user.type(inputLogin, 'test@test.com');

    await user.type(inputPassword, '1234567');

    expect(button).toBeEnabled();
  });
  it('checks if after login have a key user on localstorage', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const inputLogin = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /enter/i });

    await user.type(inputLogin, 'test@test.com');
    await user.type(inputPassword, '1234567');
    await user.click(button);
    expect(localStorage.getItem('user')).toBeTruthy();
  });
});
