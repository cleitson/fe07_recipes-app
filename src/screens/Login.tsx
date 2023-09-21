import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { email, password } = form;

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Login:
          {' '}
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            onChange={ handleChange }
            placeholder="Digite seu e-mail"
          />
        </label>

        <label>
          Senha:
          {' '}
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="password"
            onChange={ handleChange }
            placeholder="Digite sua senha"
          />
        </label>

        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ !(regexEmail.test(email) && password.length > 6) }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
