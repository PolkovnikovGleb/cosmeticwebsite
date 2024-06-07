import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles/style.module.scss';

import iconUser from '../Ui/img/Icon color.svg';
import iconShop from '../Ui/img/shopping-cart 1.svg';
import iconSearch from '../Ui/img/Icon search.svg';
import iconLine from '../Ui/img/Line 2.svg';

function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.navbar__logo}>
        <Link to='/'>
          <h2>UTE</h2>
        </Link>
      </div>
      <div className={s.navbar__content}>
        <div className={s.content_pages}>
          <Link to='/'>Shop</Link>
          <Link to='/'>News</Link>
          <Link to='/'>Blog</Link>
          <img className={s.pages_icon} src={iconLine} alt='поиск' />
        </div>
        <div className={s.content_menu}>
          <Link to='/'>
            <img src={iconSearch} alt='поиск' />
          </Link>
          <Link to='/'>
            <img src={iconShop} alt='корзина' />
          </Link>
          <Link to='/'>
            <img src={iconUser} alt='кабинет пользователя' />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
