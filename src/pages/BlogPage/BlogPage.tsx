import React from 'react';
import s from './styles/style.module.scss';
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { Article } from '../../type/typeArticle';
import BlogItem from '../../components/BlogItem/BlogItem';

function BlogPage(): React.JSX.Element {
  const articles = useSelector((store: RootState) => store.articles.articles);

  return (
    <div className={s.blog}>
      {articles.map((article: Article) => (
        <BlogItem key={article.id} article={article} />
      ))}
    </div>
  );
}

export default BlogPage;
