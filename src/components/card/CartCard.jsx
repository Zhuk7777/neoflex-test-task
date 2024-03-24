import React, { useState } from 'react';
import classes from './CartCard.module.css';
import removeIcon from '../../images/remove.svg';
import minusIcon from '../../images/minus.svg';
import plusIcon from '../../images/plus.svg';

const CartCard = ({cardData, className}) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className={`${classes['card']} ${className}`}>
      <section className={classes['card__section']}>
        <img className={classes['card__image']} src={require(`${cardData.img}`)} alt={`Изображение модели ${cardData.title}`}/>
        <div className={classes['card__description']}>
          <h3 className={classes['card__title']}>{cardData.title}</h3>
          <span className={classes['card__price']}>
            {cardData.discountedPrice ? `${cardData.discountedPrice} ₽` : `${cardData.price} ₽`}
          </span>
        </div>
        <div className={classes['card__counter']}>
          <button type="button" className={classes['card__counter-button']}>
            <img className={classes['card__counter-icon']} src={minusIcon} alt="Минус"/>
          </button>
          <span className={classes['card__counter-value']}>{counter}</span>
          <button type="button" className={classes['card__counter-button']}>
            <img className={classes['card__counter-icon']} src={plusIcon} alt="Плюс"/>
          </button>
        </div> 
      </section>
      <section className={classes['card__section']}>
        <button type="button" className={classes['card__remove-button']}>
          <img className={classes['card__remove-icon']} src={removeIcon} alt="Иконка удаления"/>
        </button>
        <span className={`${classes['card__price']} ${classes['card__total-price']}`}>{cardData.price} ₽</span>
      </section>
    </div>
  );
};

export default CartCard;