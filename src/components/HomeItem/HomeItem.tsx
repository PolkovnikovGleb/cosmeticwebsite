import React from 'react';
import { Product } from '../../type/typeProducts';
import s from './styles/style.module.scss';
import BaseButton from '../Ui/BaseButton/baseButton';

function HomeItem({ product }: { product: Product }): React.JSX.Element {
  return (
    <div className={s.product}>
      <img className={s.product_img} src={product.image} alt='фото продукта' />
      <p className={s.product_title}>{product.title}</p>
      <div className={s.product_price}>
        <p>{product.price}</p>
        <BaseButton type='button'>Reade More</BaseButton>
      </div>
    </div>
  );
}

export default HomeItem;
