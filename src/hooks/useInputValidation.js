import { useState } from "react";

export const useInputValidation = (validationConfig) => {
  const [valid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (evt) => {
    const input = evt.target;
    const form = evt.target.closest(validationConfig.formSelector);

    if (input.validity.patternMismatch)
      input.setCustomValidity(input.dataset.errorMessage);
    else
      input.setCustomValidity(""); 

    setValid(!input.validity.patternMismatch && input.validity.valid);

    if (!input.validity.valid)
      showInputError(form, input, input.validationMessage, validationConfig);
    else
      hideInputError(form, input, validationConfig);
  };

  const showInputError = (form, input, errorMessage, validationConfig) => {
    input.classList.add(validationConfig.inputErrorClass);
    setErrorMessage(errorMessage);
  };
  
  const hideInputError = (form, input, validationConfig) => {
    input.classList.remove(validationConfig.inputErrorClass);
    setErrorMessage('');
  };

  return [valid, errorMessage, onChange];

};