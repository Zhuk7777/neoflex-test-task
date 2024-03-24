import React from 'react';
import classes from './TotalPrice.module.css';

const TotalPrice = ({className}) => {
  return (
    <div className={`${classes['total-price-card']} ${className}`}>
      <div className={classes['total-price-card__text']}>
        <h3 className={classes['total-price-card__title']}>Итого</h3>
        <span className={classes['total-price-card__value']}>₽ 2 927</span>
      </div>
      <button type="button" className={classes['total-price-card__button']}>
        Перейти к оформлению
      </button>
    </div>
  );
};

export default TotalPrice;