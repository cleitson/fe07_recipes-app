import React from 'react';

function Login() {
  console.log('oi');

  return (
    <div>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu e-mail"
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        id="password"
        placeholder="Digite sua senha"
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
      >
        Enter
      </button>

    </div>
  );
}

export default Login;
