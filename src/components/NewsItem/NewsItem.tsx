import React from 'react';
import BaseButton from '../Ui/BaseButton/baseButton';
import { News } from '../../type/typeNews';
import s from './styles/style.module.scss';

function NewsItem({ news }: { news: News }): React.JSX.Element {
  return (
    <div className={s.news__component}>
      <img
        className={s.news__component_img}
        src={news.image}
        alt='фото новости'
      ></img>
      <div className={s.news__component_element}>
        <p className={s.news__component_element_title}>{news.title}</p>
        <BaseButton type='button'>Read More</BaseButton>
      </div>
    </div>
  );
}

export default NewsItem;
