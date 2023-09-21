import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste da tela de login', () => {
  const inputLogin = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const button = screen.getByRole('button', { name: /enter/i });

  it('checks inputs and buttons are on screen', () => {
    render(<App />);
    expect(inputLogin).toBeInTheDocument();

    expect(inputPassword).toBeInTheDocument();

    expect(button).toBeInTheDocument();
  });

  it('checks if the button is enabled', () => {
    userEvent.type(inputLogin, 'test@test.com');

    userEvent.type(inputPassword, '1234567');

    userEvent.click(button);

    expect(button).not.toBeDisabled();
  });

  it('checks if the button is not enabled', () => {
    userEvent.type(inputLogin, 'te-#st@test.com');

    userEvent.type(inputPassword, '1234');

    userEvent.click(button);

    expect(button).not.toBeDisabled();
  });
});
