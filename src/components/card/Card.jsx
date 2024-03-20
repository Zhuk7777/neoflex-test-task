import React from 'react';
import classes from './Card.module.css';
import starLogo from '../../images/star.svg';

const Card = ({cardData}) => {
  console.log(cardData.img);
  return (
    <div className={classes['card']}>
      <img className={classes['card__image']} src={require(`${cardData.img}`)} alt={`Изображение модели ${cardData.title}`} />
      <div className={classes['card-description']}>
        <h2 className={classes['card__title']}>{cardData.title}</h2>
        <span
          className={classes['card__price']}
          data-prev-price={cardData.discountedPrice? `${cardData.price} ₽` : ''}
        >
          {cardData.discountedPrice ? `${cardData.discountedPrice} ₽` : `${cardData.price} ₽`}
        </span>
        <div className={classes['card__rate']}>
          <img className={classes['rate__star']} src={starLogo} alt="Звезда" />
          <span className={classes['card__rate-value']}>{cardData.rate}</span>
        </div>
        <button type="button" className={classes['card__button']}>Купить</button>
      </div>
    </div>
  );
};

export default Card;