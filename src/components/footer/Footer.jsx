import React from 'react';
import classes from './Footer.module.css';
import Logo from '../logo/Logo';
import langIcon from '../../images/lang.svg';
import vkIcon from '../../images/vk.svg';
import telegramIcon from '../../images/telegram.svg';
import whatsappIcon from '../../images/whatsapp.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={classes['footer']} aria-label="Подвал">
      <Logo>qpick</Logo>
      <nav className={classes['footer__menu']}>
        <ul className={classes['footer__menu-list']}>
          <li className={classes['footer__menu-list-item']}>
            <Link to="/favourites" className={classes['footer__link']}>Избранное</Link>
          </li>
          <li className={classes['footer__menu-list-item']}>
            <Link to="/cart" className={classes['footer__link']}>Корзина</Link>
          </li>
          <li className={classes['footer__menu-list-item']}>
            <Link to="/contacts" className={classes['footer__link']}>Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className={classes['footer__settings']}>
        <Link to="/conditions" className={`${classes['footer__link']} ${classes['footer__settings-link']}`}>Условия сервиса</Link>
        <div className={classes['footer__languages']} aria-label="Смена языка">
          <img
            src={langIcon}
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
      <ul className={classes['footer__social-list']} aria-label="Социальные сети">
        <li className={classes['footer__social-list-item']}>
          <a
            href="https://vk.com/neoflex_ru"
            className={classes['footer__social-link']}
            target="_blank"
            aria-label="Ссылка на VK"
          >
            <img
              src={vkIcon}
              alt="Мы в VK" 
              className={`${classes['footer__social-link-icon']} ${classes['footer__social-link-icon_small']}`}
            />
          </a>
        </li>
        <li className={classes['footer__social-list-item']}>
          <a
            href="https://t.me/neoflexcareers"
            className={classes['footer__social-link']}
            target="_blank"
            aria-label="Ссылка на Telegram"
          >
            <img
              src={telegramIcon}
              alt="Мы в Telegram" 
              className={classes['footer__social-link-icon']}
            />
          </a>
        </li>
        <li className={classes['footer__social-list-item']}>
          <a
          href="https://wa.me/74959842513?text=Здравствуйте%2C+у+меня+есть+вопрос"
          className={classes['footer__social-link']}
          target="_blank"
          aria-label="Ссылка на WhatsApp"
          >
            <img
              src={whatsappIcon}
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