import React from 'react';

import s from './styles/style.module.scss';

import imgHeder from '../../components/Ui/img/contentHeader.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/stor';
import { Product } from '../../type/typeProducts';
import HomeItem from '../../components/HomeItem/HomeItem';

function Home(): React.JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);

  return (
    <div className={s.home}>
      <div className={s.home__header}>
        <img className={s.header_img} src={imgHeder} alt='главный банер' />
      </div>
      <div className={s.content}>
        <div className={s.content_caption}>
          <h3>Товары</h3>
        </div>
        <div className={s.content_products}>
          {products.map((product: Product) => (
            <HomeItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
