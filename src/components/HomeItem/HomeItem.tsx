import React from 'react';
import { Product } from '../../type/typeProducts';
import s from './styles/style.module.scss';
import BaseButton from '../Ui/BaseButton/baseButton';

function HomeItem({ product }: { product: Product }): React.JSX.Element {
  return (
    <div className={s.component}>
      <img
        className={s.component_img}
        src={product.image}
        alt='фото продукта'
      />
      <p className={s.component_title}>{product.title}</p>
      <div className={s.component_price}>
        <p>{product.price}</p>
        <BaseButton type='button'>Details</BaseButton>
      </div>
    </div>
  );
}

export default HomeItem;
