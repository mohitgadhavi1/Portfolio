import React from 'react';
import CartContex from './CartContex';

function CartProvider(props) {
   const addItemToCartHandler = (item) => {};
   const removeItemToCartHandler = (id )=> {};

  const cartContex = {
      item: [],
      totalAmount: 0,
      addItem:addItemToCartHandler,
      removeItem:removeItemToCartHandler
  }

    return (
     <CartContex.Provider value={cartContex}>
         {props.children}
     </CartContex.Provider>
    )
}

export default CartProvider;
