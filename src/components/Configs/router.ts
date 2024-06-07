import Home from '../../pages/Home/Home';

export const routes = {
  home: '/',
};

export const router = [
  {
    id: 1,
    name: 'home',
    path: routes.home,
    component: Home,
  },
];
