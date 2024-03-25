import React, { useContext, useEffect, useState } from 'react';
import classes from './CartCard.module.css';
import removeIcon from '../../images/remove.svg';
import minusIcon from '../../images/minus.svg';
import plusIcon from '../../images/plus.svg';
import { AppContext } from '../../providers/AppProvider';

const CartCard = ({cardData, className}) => {
  const {removeCardFromCart, changeCounterAtCard, getCounterValueByCardId} = useContext(AppContext);
  const [counter, setCounter] = useState(getCounterValueByCardId(cardData.id));

  useEffect(() => {
    changeCounterAtCard(cardData, counter);
  }, [counter])

  const clickMinusButton = () => {
    if(counter > 1)
      setCounter(counter => counter - 1);
  }

  return (
    <div className={`${classes['card']} ${className}`} aria-label="Карточка товара">
      <section className={classes['card__section']}>
        <img className={classes['card__image']} src={require(`${cardData.img}`)} alt={`Изображение модели ${cardData.title}`}/>
        <div className={classes['card__description']}>
          <h3 className={classes['card__title']} aria-label="Название модели">{cardData.title}</h3>
          <span className={classes['card__price']} aria-label="Цена товара">
            {cardData.discountedPrice ? cardData.discountedPrice : cardData.price} ₽
          </span>
        </div>
        <div className={classes['card__counter']} aria-label="Управление количеством покупаемого товара">
          <button
            type="button"
            className={classes['card__counter-button']}
            onClick={clickMinusButton}
            aria-label="Минус"
            aria-description="Уменьшить количество на единицу"
          >
            <img className={classes['card__counter-icon']} src={minusIcon} alt="Минус"/>
          </button>
          <span className={classes['card__counter-value']} aria-label="Количество">{counter}</span>
          <button
            type="button"
            className={classes['card__counter-button']}
            onClick={() => setCounter(counter => counter + 1)}
            aria-label="Плюс"
            aria-description="Увеличить количество на единицу"
          >
            <img className={classes['card__counter-icon']} src={plusIcon} alt="Плюс"/>
          </button>
        </div> 
      </section>
      <section className={classes['card__section']}>
        <button
          type="button"
          className={classes['card__remove-button']}
          onClick={() => removeCardFromCart(cardData.id)}
          aria-label="Удалить товар из корзины"
        >
          <img className={classes['card__remove-icon']} src={removeIcon} alt="Иконка удаления"/>
        </button>
        <span
          className={`${classes['card__price']} ${classes['card__total-price']}`}
          aria-label="Итоговая цена по данному товару"
        >
          {(cardData.discountedPrice ? cardData.discountedPrice : cardData.price) * counter} ₽
        </span>
      </section>
    </div>
  );
};

export default CartCard;