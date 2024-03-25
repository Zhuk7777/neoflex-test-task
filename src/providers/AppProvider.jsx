import React, { createContext, useEffect, useState } from 'react';
import { useSessionStorage } from '../hooks/useSessionStorage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [cart, setCart] = useSessionStorage("cart", "[]");
  const [totalPrice, setTotalPrice] = useState(0);
  const [countItemsInCart, setCountItemsInCart] = useState(0);

  useEffect(() => {
    setTotalPrice(сalculateTotalPrice());
    setCountItemsInCart(JSON.parse(cart).length);
  }, [cart])

  const addCardToCart = (cardData) => {
    const cartArray = JSON.parse(cart);
    const newCard = {...cardData, ...{count: 1}};

    if(!cartArray.some(card => card.id === newCard.id))
    {
      cartArray.push(newCard);
      setCart(JSON.stringify(cartArray));
    }
  }

  const removeCardFromCart = (cardId) => {
    const cartArray = JSON.parse(cart);
    const cardIndex = cartArray.findIndex((card) => card.id === cardId);

    cartArray.splice(cardIndex, 1);
    setCart(JSON.stringify(cartArray));
  }

  const сalculateTotalPrice = () => {
    const cartArray = JSON.parse(cart);
    return cartArray.reduce((totalPrice, item) => {
      return totalPrice + (item.discountedPrice ? item.discountedPrice : item.price) * item.count;
    }, 0)
  }

  const getCounterValueByCardId = (cardId) => {
    const cartArray = JSON.parse(cart);
    const card = cartArray.find((card) => card.id === cardId);
    return card.count;
  }

  const changeCounterAtCard = (cardData, counterValue) => {
    const cartArray = JSON.parse(cart);
    const cardIndex = cartArray.findIndex((card) => card.id === cardData.id)

    cartArray[cardIndex] = {...cardData, ...{count: counterValue}}
    setCart(JSON.stringify(cartArray));
  }

  return (
    <AppContext.Provider value={{cart, addCardToCart, removeCardFromCart, totalPrice, countItemsInCart, changeCounterAtCard, getCounterValueByCardId}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;