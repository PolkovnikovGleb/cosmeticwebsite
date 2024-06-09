import React from 'react';
import s from './styles/style.module.scss';
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import BlogItem from '../../components/BlogItem/BlogItem';
import { Post } from '../../type/typePost';

function BlogPage(): React.JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);

  return (
    <div className={s.blog}>
      <h3 className={s.blog_title}>Blog</h3>
      <div className={s.blog__body}>
        <div className={s.blog__body_filter}>
          <h3>Categories</h3>
          <p>Hair</p>
          <p>Body</p>
        </div>
        <div className={s.blog__body_posts}>
          {posts.map((posts: Post) => (
            <BlogItem key={posts.id} posts={posts} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
