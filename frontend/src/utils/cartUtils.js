export const addDecimals = (number) => {
  return (Math.round(number + 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.qty,
      0
    )
  );

  // Calculate total quantity
  state.totalQty = state.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.qty,
    0
  );

  // Calculate shipping price (If order is over $100 then free, else $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate tax price (15% tax)
  state.taxPrice = addDecimals(Number(state.itemsPrice * 0.15).toFixed(2));

  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
