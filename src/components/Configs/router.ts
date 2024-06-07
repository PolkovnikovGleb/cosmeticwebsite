import BlogPage from '../../pages/BlogPage/BlogPage';
import Home from '../../pages/Home/Home';

export const routes = {
  home: '/',
  blog: '/blog',
};

export const router = [
  {
    id: 1,
    name: 'home',
    path: routes.home,
    component: Home,
  },
  {
    id: 4,
    name: 'blog',
    path: routes.blog,
    component: BlogPage,
  },
];
