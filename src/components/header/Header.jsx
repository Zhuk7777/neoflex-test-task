import React, { useContext, useState } from 'react';
import classes from './Header.module.css';
import likeIcon from '../../images/like.svg';
import cartIcon from '../../images/cart.svg';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../providers/AppProvider';

const Header = () => {
  const {countItemsInCart} = useContext(AppContext);
  const [countLikedItems, setCountLikedItems] = useState(0);

  const setLinkClass = ({isActive}) => isActive ? `${classes['header__link']} ${classes['header__link_active']}` : classes['header__link'];
  
  return (
    <header className={classes['header']} aria-label="Шапка">
      <Logo>qpick</Logo>
      <nav className={classes['header__menu']}>
        <ul className={classes['header__list']}>
          <li className={classes['header__list-item']}>
            <NavLink to="/liked" className={setLinkClass} aria-label="Понравившиеся">
              <img
                src={likeIcon}
                alt="Понравившиеся" 
                className={classes['header__icon']}
              />
              <div
               className={countLikedItems > 0 ? classes['header__link-counter'] : classes['header__link-counter_invisible']}
               aria-description="Количество понравившихся товаров"
              >
                {countLikedItems}
              </div>
            </NavLink>
          </li>
          <li className={classes['header__list-item']}>
            <NavLink to="/cart" className={setLinkClass} aria-label="Корзина">
              <img
                src={cartIcon}
                alt="Корзина" 
                className={`${classes['header__icon']} ${classes['header__icon_large']}`}
              />
              <div
               className={countItemsInCart > 0 ? classes['header__link-counter'] : classes['header__link-counter_invisible']}
               aria-description="Количество добавленных в корзину товаров"
              >
                {countItemsInCart}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;