import React from 'react';
import classes from './Popup.module.css';

const Popup = ({children, title, popupId}) => {
  return (
    <dialog
      className={classes['popup']}
      id={popupId}
      onClick={() => window[popupId].close()}
    >
      <div className={classes['popup__content']} onClick={evt => evt.stopPropagation()}>
        <button 
          type="button" 
          className={classes['popup__close']}
          onClick={() => window[popupId].close()}
          aria-label="Закрыть"
        />
        <h3 className={classes['popup__title']}>{title}</h3>
        {children}
      </div>
    </dialog>
  );
};

export default Popup;