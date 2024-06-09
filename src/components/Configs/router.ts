import BlogPage from '../../pages/BlogPage/BlogPage';
import Home from '../../pages/Home/Home';
import NewsPage from '../../pages/NewsPage/NewsPage';

export const routes = {
  home: '/',
  blog: '/blog',
  news: '/news',
};

export const router = [
  {
    id: 1,
    name: 'home',
    path: routes.home,
    component: Home,
  },
  {
    id: 3,
    name: 'news',
    path: routes.news,
    component: NewsPage,
  },
  {
    id: 4,
    name: 'blog',
    path: routes.blog,
    component: BlogPage,
  },
];
