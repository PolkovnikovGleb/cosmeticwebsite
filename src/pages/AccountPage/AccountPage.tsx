import React, { useState } from 'react';
import s from './styles/style.module.scss';

function AccountPage(): React.JSX.Element {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  return (
    <div className={s.account}>
      <h3 className={s.account_title}>My account</h3>
      <div className={s.account_button}>
        <button onClick={(e) => e.target}>Sing in</button>
        <button onClick={(e) => e.target}>Register</button>
      </div>
      <form className={s.account__auth}>
        <input
          className={s.account__auth_email}
          name='email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={s.account__auth_password}
          name='password'
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={s.account__auth_button} type='submit'>
          SING IN
        </button>
      </form>
      <form className={s.account__register}>
        <input
          className={s.account__register_name}
          name='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={s.account__register_email}
          name='email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={s.account__register_password}
          name='password'
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={s.account__register_button} type='submit'>
          Sing In
        </button>
      </form>
    </div>
  );
}

export default AccountPage;
