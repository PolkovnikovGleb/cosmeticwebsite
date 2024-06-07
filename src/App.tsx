import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './store/stor';
import { productsInit } from './store/Products/ProductsSlice';
import Layout from './components/Layout/Layout';
import { router } from './components/Configs/router';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsInit());
  });
  return (
    <Layout>
      <Routes>
        {router.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
