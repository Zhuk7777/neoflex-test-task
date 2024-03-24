import React from 'react';
import classes from './Header.module.css';
import likeIcon from '../../images/like.svg';
import cartIcon from '../../images/cart.svg';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const counterOne = 2;
  const counterTwo = 0;

  const setLinkClass = ({isActive}) => isActive ? `${classes['header__link']} ${classes['header__link_active']}` : classes['header__link'];
  
  return (
    <header className={classes['header']}>
      <Logo>qpick</Logo>
      <nav className={classes['header__menu']}>
        <ul className={classes['header__list']}>
          <li className={classes['header__list-item']}>
            <NavLink to="/liked" className={setLinkClass}>
              <img
                src={likeIcon}
                alt="Понравившиеся" 
                className={classes['header__icon']}
              />
              <div
               className={counterOne ? classes['header__link-counter'] : classes['header__link-counter_invisible']}
              >
                {counterOne}
              </div>
            </NavLink>
          </li>
          <li className={classes['header__list-item']}>
            <NavLink to="/cart" className={setLinkClass}>
              <img
                src={cartIcon}
                alt="Корзина" 
                className={`${classes['header__icon']} ${classes['header__icon_large']}`}
              />
              <div
               className={counterOne ? classes['header__link-counter'] : classes['header__link-counter_invisible']}
              >
                {counterOne}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;