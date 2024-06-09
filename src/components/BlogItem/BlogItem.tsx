import React from 'react';
import BaseButton from '../Ui/BaseButton/baseButton';
import { Post } from '../../type/typePost';
import s from './styles/style.module.scss';

function BlogItem({ posts }: { posts: Post }): React.JSX.Element {
  return (
    <div className={s.post}>
      <img className={s.post_img} src={posts.image} alt='фото поста' />
      <div className={s.post__info}>
        <p className={s.post__info_title}>{posts.title}</p>
        <BaseButton type='button'>Read More</BaseButton>
      </div>
    </div>
  );
}

export default BlogItem;
