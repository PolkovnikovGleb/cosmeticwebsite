import React from 'react';
import BaseButton from '../Ui/BaseButton/baseButton';
import { Article } from '../../type/typeArticle';
import s from './styles/style.module.scss';

function BlogItem({ posts }: { posts: Article }): React.JSX.Element {
  return (
    <div className={s.post}>
      <img className={s.post_img} src={posts.image} alt='фото поста' />
      <div className={s.post_element}>
        <p className={s.element_title}>{posts.title}</p>
        <BaseButton type='button'>Read More</BaseButton>
      </div>
    </div>
  );
}

export default BlogItem;
