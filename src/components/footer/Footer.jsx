import React from 'react';
import classes from './Footer.module.css';
import Logo from '../logo/Logo';
import langLogo from '../../images/lang.svg';
import vkLogo from '../../images/vk.svg';
import telegramLogo from '../../images/telegram.svg';
import whatsappLogo from '../../images/whatsapp.svg';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <Logo>qpick</Logo>
      <nav className={classes['footer__menu']}>
        <ul className={classes['footer__menu-list']}>
          <li className={classes['footer__menu-list-item']}>
            <a href="#0" className={classes['footer__link']}>Избранное</a>
          </li>
          <li className={classes['footer__menu-list-item']}>
            <a href="#0" className={classes['footer__link']}>Корзина</a>
          </li>
          <li className={classes['footer__menu-list-item']}>
            <a href="#0" className={classes['footer__link']}>Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={classes['footer__settings']}>
        <a href="#0" className={`${classes['footer__link']} ${classes['footer__settings-link']}`}>Условия сервиса</a>
        <div className={classes['footer__languages']}>
          <img
            src={langLogo}
            alt="Иконка языков" 
            className={classes['languages__logo']}
          />
          <button
            type="button"
            className={`${classes['languages__button']} ${classes['languages__button_active']}`}
          >
            Рус
          </button>
          <button
            type="button"
            className={classes['languages__button']}
          >
            Eng
          </button>
        </div>
      </div>
      <ul className={classes['footer__social-list']}>
        <li className={classes['footer__social-list-item']}>
          <a href="#0" className={classes['footer__social-link']} target="_blank">
            <img
              src={vkLogo}
              alt="Мы в VK" 
              className={`${classes['footer__social-link-icon']} ${classes['footer__social-link-icon_small']}`}
            />
          </a>
        </li>
        <li className={classes['footer__social-list-item']}>
          <a href="#0" className={classes['footer__social-link']} target="_blank">
            <img
              src={telegramLogo}
              alt="Мы в Telegram" 
              className={classes['footer__social-link-icon']}
            />
          </a>
        </li>
        <li className={classes['footer__social-list-item']}>
          <a href="#0" className={classes['footer__social-link']} target="_blank">
            <img
              src={whatsappLogo}
              alt="Мы в WhatsApp" 
              className={classes['footer__social-link-icon']}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;