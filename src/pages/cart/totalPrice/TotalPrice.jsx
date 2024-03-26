import React, { useContext } from 'react';
import classes from './TotalPrice.module.css';
import { AppContext } from '../../../providers/AppProvider';

const TotalPrice = ({className, popupId}) => {
  const {totalPrice} = useContext(AppContext);

  return (
    <div className={`${classes['total-price-card']} ${className}`} aria-label="Оформление заказа">
      <div className={classes['total-price-card__text']}>
        <h3 className={classes['total-price-card__title']}>Итого</h3>
        <span
          className={classes['total-price-card__value']}
          aria-label="Итоговая цена по всем товарам в корзине"
        >
          ₽ {totalPrice}
        </span>
      </div>
      <button
        type="button"
        className={totalPrice > 0 ? classes['total-price-card__button'] : `${classes['total-price-card__button']} ${classes['total-price-card__button_disabled']}`}
        onClick={() => window[popupId].showModal()}
        aria-controls={popupId}
      >
        Перейти к оформлению
      </button>
    </div>
  );
};

export default TotalPrice;