import React from 'react';
import classes from './Header.module.css';
import likeLogo from '../../images/like.svg';
import cartLogo from '../../images/cart.svg';
import Logo from '../footer/logo/Logo';

const Header = () => {
  return (
    <header className={classes['header']}>
      <Logo>qpick</Logo>
      <nav className={classes['header__menu']}>
        <ul className={classes['header__list']}>
          <li className={classes['header__list-item']}>
            <a href="#0" className={classes['header__link']} data-count="2">
              <img
                src={likeLogo}
                alt="Понравившиеся" 
                className={classes['header__icon']}
              />
            </a>
          </li>
          <li className={classes['header__list-item']}>
            <a href="#0" className={classes['header__link']} data-count="1">
              <img
                src={cartLogo}
                alt="Корзина" 
                className={`${classes['header__icon']} ${classes['header__icon_large']}`}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;