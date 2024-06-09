import React from 'react';
import { Product } from '../../type/typeProducts';
import HomeItem from '../../components/HomeItem/HomeItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/stor';
import s from './styles/style.module.scss';

function ShopPage(): React.JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);

  return (
    <div className={s.shop}>
      <h3 className={s.shop_title}>Shop</h3>
      <div className={s.shop_body}>
        {products.map((product: Product) => (
          <HomeItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
