import React from 'react';
import classes from './Card.module.css';
import starLogo from '../../images/star.svg';

const Card = ({cardData}) => {
  return (
    <div className={classes['card']}>
      <img className={classes['card__image']} src={require(`${cardData.img}`)} alt={`Изображение модели ${cardData.title}`} />
      <div className={classes['card__description']}>
        <section className={classes['card__description-section']}>
          <h3 className={classes['card__title']}>{cardData.title}</h3>
          <div className={classes['card__rate']}>
            <img className={classes['rate__star']} src={starLogo} alt="Звезда" />
            <span className={classes['rate__value']}>{cardData.rate}</span>
          </div>
        </section>
        <section className={classes['card__description-section']}>
          <span className={ classes['card__price']}>
            {cardData.discountedPrice ? `${cardData.discountedPrice} ₽` : `${cardData.price} ₽`}
          </span>
          <span 
            className={cardData.discountedPrice ? classes['card__prev-price'] : classes['card__prev-price_invisible']}
          >
            {cardData.price} ₽
          </span>
          <button type="button" className={classes['card__button']}>Купить</button>
        </section>
      </div>
    </div>
  );
};

export default Card;