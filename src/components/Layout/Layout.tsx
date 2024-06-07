import React from 'react';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import s from './styles/style.module.scss';

function Layout({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <NavBar />
      </div>
      <main className={s.content}>{children}</main>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
