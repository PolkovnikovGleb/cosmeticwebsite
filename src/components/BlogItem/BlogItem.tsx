import React from 'react';
import BaseButton from '../Ui/BaseButton/baseButton';
import { Article } from '../../type/typeArticle';
import s from './styles/style.module.scss';

function BlogItem({ article }: { article: Article }): React.JSX.Element {
  return (
    <>
      <div className={s.article}>
        <img className={s.article_img} src={article.image} alt='фото статьи' />
        <div className={s.article_element}>
          <p className={s.element_title}>{article.title}</p>
          <BaseButton type='button'>Details</BaseButton>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
