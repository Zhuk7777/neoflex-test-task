import React from 'react';
import classes from './Logo.module.css';

const Logo = ({children}) => {
  return (
    <a href="#0" className={classes['logo']}>{children}</a>
  );
};

export default Logo;