
export const addItemToCart = (cartItems, cartItemToAdd) => {  
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const selectCartItemsCount = (cartItems) =>
  cartItems.reduce((accumalatedQuantity, cartItem) => {
    return accumalatedQuantity + cartItem.quantity;
  }, 0);
export const selectCartTotal = (cartItems) =>
  cartItems.reduce((accumalatedQuantity, cartItem) => {
    return accumalatedQuantity + cartItem.quantity * cartItem.price;
  }, 0);
export const selectCartItems = (cartItems) =>
  cartItems.reduce((accumalatedQuantity, cartItem) => {
    return accumalatedQuantity + cartItem.quantity;
  }, 0);
export const selectCartHidden = (cartItems) =>
  cartItems.hidden;