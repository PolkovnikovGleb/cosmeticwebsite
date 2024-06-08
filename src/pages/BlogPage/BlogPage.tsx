import React from 'react';
import s from './styles/style.module.scss';
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { Article } from '../../type/typeArticle';
import BlogItem from '../../components/BlogItem/BlogItem';

function BlogPage(): React.JSX.Element {
  const posts = useSelector((store: RootState) => store.articles.articles);

  return (
    <div className={s.blog}>
      <h3 className={s.blog_title}>Blog</h3>
      <div className={s.blog__body}>
        <div className={s.body_filter}>
          <h4>Categories</h4>
          <p>Hair</p>
          <p>Body</p>
        </div>
        <div className={s.body_posts}>
          {posts.map((posts: Article) => (
            <BlogItem key={posts.id} posts={posts} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
