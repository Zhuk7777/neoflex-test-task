import React from 'react';
import classes from './CartPage.module.css';
import CartCard from '../../components/card/CartCard';
import TotalPrice from './totalPrice/TotalPrice';

const CartPage = () => {
  return (
    <div className={classes['test']}>
      <CartCard />
      <TotalPrice/>
    </div>
  );
};

export default CartPage;