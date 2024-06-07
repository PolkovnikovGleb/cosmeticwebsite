import React from 'react';

import iconIn from '../Ui/img/in.svg';
import iconTw from '../Ui/img/tw.svg';
import iconInst from '../Ui/img/inst.svg';
import iconFb from '../Ui/img/fb.svg';

import s from './styles/style.module.scss';

function Footer() {
  return (
    <div className={s.footer}>
      <a href='/'>
        <img src={iconIn} alt='In' />
      </a>
      <a href='/'>
        <img src={iconFb} alt='Fb' />
      </a>
      <a href='/'>
        <img src={iconInst} alt='Inst' />
      </a>
      <a href='/'>
        <img src={iconTw} alt='Tw' />
      </a>
    </div>
  );
}

export default Footer;
