import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={classes['not-found-error']}>
      <h1 className={classes['not-found-error__code']}>404</h1>
      <h2 className={classes['not-found-error__message']}>Страница не найдена</h2>
      <p className={classes['not-found-error__description']}>
        Страница, на которую вы пытаетесь попасть, не существует или была удалена. Перейдите на
        <Link to="/" className={classes['not-found-error__link']}>Главную страницу</Link>
      </p>
  </div>
  );
};

export default NotFoundPage;