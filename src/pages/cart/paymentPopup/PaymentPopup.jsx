import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './PaymentPopup.module.css';
import Popup from '../../../components/popup/Popup';
import { AppContext } from '../../../providers/AppProvider';
import showIcon from '../../../images/show.svg';
import hideIcon from '../../../images/hide.svg';
import { useInputValidation } from '../../../hooks/useInputValidation';

const validationConfig = {
  formSelector: `.${classes['popup__form']}`,
  inactiveButtonClass: `${classes['form__button_disabled']}`,
  inputErrorClass: `${classes['form__input_error']}`,
};

const PaymentPopup = ({popupId}) => {
  const {totalPrice} = useContext(AppContext);
  const codeInputRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [codeIconVisibility, setCodeIconVisibility] = useState(showIcon);

  const [cardNumberInputValid, cardNumberErrorMessage, cardNumberInputOnChange] = useInputValidation(validationConfig);
  const [nameInputValid, nameErrorMessage, nameInputOnChange] = useInputValidation(validationConfig);
  const [periodInputValid, periodErrorMessage, periodInputOnChange] = useInputValidation(validationConfig);
  const [codeInputValid, codeErrorMessage, codeInputOnChange] = useInputValidation(validationConfig);


  useEffect(() => {
    if(cardNumberInputValid && nameInputValid && periodInputValid && codeInputValid)
    {
      submitButtonRef.current.classList.remove(validationConfig.inactiveButtonClass);
      submitButtonRef.current.disabled = false
    }
    else
    {
      submitButtonRef.current.classList.add(validationConfig.inactiveButtonClass);
      submitButtonRef.current.disabled = true;
    }
  }, [cardNumberInputValid, nameInputValid, periodInputValid, codeInputValid])


  const changeCodedVisibility = () => {
    if(codeInputRef.current.getAttribute("type") === "password")
    {
      codeInputRef.current.setAttribute("type", "text");
      setCodeIconVisibility(hideIcon);
    }
    else
    {
      codeInputRef.current.setAttribute("type", "password");
      setCodeIconVisibility(showIcon); 
    }
  };

  return (
    <Popup popupId={popupId} title={"Платежная информация"}>
      <form className={classes['popup__form']}>
        <label className={classes['form__field']}>
          Номер карты
          <input
            className={classes['form__input']}
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="0000 0000 0000 0000"
            minLength="16"
            maxLength="16"
            pattern="^\d+$"
            data-error-message="Разрешены только цифры"
            required
            aria-describedby="card-number-error"
            onChange={cardNumberInputOnChange}
          >
          </input>
          <span id="card-number-error" className={classes['form__error']}>{cardNumberErrorMessage}</span>
        </label>
        <label className={classes['form__field']}>
          Имя на карте
          <input
            className={classes['form__input']}
            type="text"
            placeholder="Ivanov Ivan"
            minLength="10"
            maxLength="40"
            pattern="^[a-zA-Z\s\-]+$"
            data-error-message="Разрешены только латинские буквы, знаки дефиса и пробелы"
            required
            aria-describedby="card-name-error"
            onChange={nameInputOnChange}
          >
          </input>
          <span id="card-name-error" className={classes['form__error']}>{nameErrorMessage}</span>
        </label>
        <fieldset className={classes['form__fieldset']}>
          <legend className="visually-hidden">Срок действия и CVV-код</legend>
          <label className={classes['form__field']}>
            Срок действия
            <input
              className={classes['form__input']}
              type="text"
              autoComplete="cc-exp"
              placeholder="ММ/ГГ"
              minLength="5"
              maxLength="5"
              pattern="^\d+\/\d+$"
              data-error-message="Ответ должен соответствовать формату ММ/ГГ"
              required
              aria-describedby="card-period-error"
              onChange={periodInputOnChange}
            >
            </input>
            <span id="card-period-error" className={classes['form__error']}>{periodErrorMessage}</span>
          </label>
          <label className={classes['form__field']}>
            CVV
            <div className={classes['form__cvv-code']}>
              <input
                className={classes['form__input']}
                type="password"
                inputMode="numeric"
                autoComplete="cc-csc"
                minLength="3"
                maxLength="3"
                pattern="^\d+$"
                data-error-message="Разрешены только цифры"
                required
                aria-describedby="card-code-error"
                ref={codeInputRef}
                onChange={codeInputOnChange}
              >
              </input>
              <button
                type="button"
                className={classes['cvv-code__visibility-controls']}
                onClick={changeCodedVisibility}
                aria-label="Изменить видимость CVV-кода"
              >
                <img className={classes['cvv-code__visibility-icon']} src={codeIconVisibility} alt="Видимость"/>
              </button>
            </div>
            <span id="card-code-error" className={classes['form__error']}>{codeErrorMessage}</span>
          </label>
        </fieldset>
        <button type="submit" className={classes['form__button']} ref={submitButtonRef}>Оплатить {totalPrice} ₽</button>
      </form>
    </Popup>
  );
};

export default PaymentPopup;