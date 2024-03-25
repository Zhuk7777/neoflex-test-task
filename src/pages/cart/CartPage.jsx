import React, { useContext, useMemo } from 'react';
import classes from './CartPage.module.css';
import CartCard from '../../components/card/CartCard';
import TotalPrice from './totalPrice/TotalPrice';
import { AppContext } from '../../providers/AppProvider';

const CartPage = () => {
  const {cart} = useContext(AppContext);
  const cards = useMemo(()=> {
    const cartArray = JSON.parse(cart);
    return cartArray.map((cardData) => <CartCard key={cardData.id} cardData={cardData}/>)
  }, [cart])

  return (
    <div className={classes['cart']}>
      <h2 className={classes['cart__title']}>Корзина</h2>
      <div className={classes['cart__cards']}>
        {cards}
      </div>
      <TotalPrice className={classes['cart__total-price']}/>
    </div>
  );
};

export default CartPage;