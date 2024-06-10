import AccountPage from '../../pages/AccountPage/AccountPage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import Home from '../../pages/Home/Home';
import NewsPage from '../../pages/NewsPage/NewsPage';
import ShopPage from '../../pages/ShopPage/ShopPage';

export const routes = {
  home: '/',
  shop: '/shop',
  news: '/news',
  blog: '/blog',
  account: '/account',
};

export const router = [
  {
    id: 1,
    name: 'home',
    path: routes.home,
    component: Home,
  },
  {
    id: 2,
    name: 'shop',
    path: routes.shop,
    component: ShopPage,
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
  {
    id: 5,
    name: 'account',
    path: routes.account,
    component: AccountPage,
  },
];
