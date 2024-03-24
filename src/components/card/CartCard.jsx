import React, { useState } from 'react';
import classes from './CartCard.module.css';
import removeIcon from '../../images/remove.svg';
import minusIcon from '../../images/minus.svg';
import plusIcon from '../../images/plus.svg';
import image from './assets/S8521.png'

const CartCard = ({cardData}) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className={classes['card']}>
      <section className={classes['card__section']}>
        <img className={classes['card__image']} src={image} alt={`Изображение модели Apple BYZ S8521`}/>
        <div className={classes['card__description']}>
          <h3 className={classes['card__title']}>Apple BYZ S8521</h3>
          <span className={classes['card__price']}>2 927 ₽</span>
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
        <span className={`${classes['card__price']} ${classes['card__total-price']}`}>2 927 ₽</span>
      </section>
    </div>
  );
};

export default CartCard;