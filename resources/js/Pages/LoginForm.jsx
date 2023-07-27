import React, { useState } from 'react';
import "./LoginForm.scss";
import Home from './Home';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const data = {
      email: email,
      password: password
    };

    fetch('/Oggylib/public/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status == 200) {
            console.log('ok');

          document.location.href = '/Oggylib/public/home';

        } else {
          setErrorMessage('Неверный логин или пароль. Попробуйте ещё раз.');
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Ошибка при выполнении запроса');
      });
  };

  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="logo">
          <img width={235} height={57} src='./img/logo.svg' alt="Логотип" />
        </div>
      </header>
      <main>
        <div className="login-page">
          <div className="form">
            <div className="login-form">
              <h1>Вход</h1>
              <h3>Логин</h3>
              <input
                type="text"
                className={`input-field ${errorMessage ? 'input-error' : ''}`}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <h3>Пароль</h3>
              <input
                type="password"
                className={`input-field ${errorMessage ? 'input-error' : ''}`}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button onClick={handleLogin}>Войти</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default LoginForm;
