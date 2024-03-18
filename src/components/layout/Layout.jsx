import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes['layout']}>
      <Header/>
      <main className={classes['main']}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;