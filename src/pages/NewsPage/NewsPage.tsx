import React from 'react';
import s from './styles/style.module.scss';
import { useSelector } from 'react-redux';
import { News } from '../../type/typeNews';
import NewsItem from '../../components/NewsItem/NewsItem';
import { RootState } from '../../store/stor';

function NewsPage(): React.JSX.Element {
  const news = useSelector((store: RootState) => store.news.news);

  return (
    <div className={s.news}>
      <h3 className={s.news_title}>News</h3>
      <div className={s.news_body}>
        {news.map((news: News) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
