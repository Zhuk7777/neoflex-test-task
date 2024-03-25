import React, { useContext } from 'react';
import classes from './CatalogCard.module.css';
import starIcon from '../../images/star.svg';
import { AppContext } from '../../providers/AppProvider';

const CatalogCard = ({cardData, className}) => {
  const {addCardToCart} = useContext(AppContext);

  return (
    <div className={`${classes['card']} ${className}`} aria-label="Карточка товара">
      <img className={classes['card__image']} src={require(`${cardData.img}`)} alt={`Изображение модели ${cardData.title}`} />
      <div className={classes['card__description']}>
        <section className={classes['card__description-section']}>
          <h3 className={classes['card__title']} aria-label="Название модели">{cardData.title}</h3>
          <div className={classes['card__rate']} aria-label="Рейтинг товара">
            <img className={classes['rate__star']} src={starIcon} alt="Звезда" />
            <span className={classes['rate__value']}>{cardData.rate}</span>
          </div>
        </section>
        <section className={classes['card__description-section']}>
          <span className={ classes['card__price']} aria-label="Цена товара">
            {cardData.discountedPrice ? cardData.discountedPrice : cardData.price} ₽
          </span>
          <span 
            className={cardData.discountedPrice ? classes['card__prev-price'] : classes['card__prev-price_invisible']}
            aria-label="Предыдущая цена товара"
          >
            {cardData.price} ₽
          </span>
          <button type="button" className={classes['card__button']} onClick={() => addCardToCart(cardData)}>Купить</button>
        </section>
      </div>
    </div>
  );
};

export default CatalogCard;