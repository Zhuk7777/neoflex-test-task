import React from 'react';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = ({children}) => {
  return (
    <Link
      to="/"
      className={classes['logo']}
      aria-label="Логотип"
      aria-description="Логотип сайта является ссылкой на главную страницу"
    >
      {children}
    </Link>
  );
};

export default Logo;