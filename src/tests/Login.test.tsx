import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste da tela de login', () => {
  render(
    // BrowserRouter é necessário para que o teste funcione;
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const inputLogin = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const button = screen.getByRole('button', { name: /enter/i });

  // it('checks inputs and buttons are on screen', () => {
  //   expect(inputLogin).toBeInTheDocument();

  //   expect(inputPassword).toBeInTheDocument();

  //   expect(button).toBeInTheDocument();
  // });

  it('checks if the button is enabled', async () => {
    await userEvent.type(inputLogin, 'test@test.com');

    await userEvent.type(inputPassword, '1234567');

    await userEvent.click(button);

    expect(button).not.toBeDisabled();
  });

  // it('checks if the button is not enabled', async () => {
  //   await userEvent.type(inputLogin, 'te-#st@test.com');

  //   await userEvent.type(inputPassword, '1234');

  //   await userEvent.click(button);

  //   expect(button).toBeDisabled();
  // });
});
