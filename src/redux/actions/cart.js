export const addPizzaToCart = (pizza) => ({type: 'ADD_PIZZA_CART', payload: pizza});
export const clearCart = () => ({type: 'CLEAR_CART'});
export const cartItemRemove = (id) => ({type: 'CART_ITEM_REMOVE', payload: id});
export const plusCartItem = (id) => ({type: 'PLUS_CART_ITEM', payload: id});
export const minusCartItem = (id) => ({type: 'MINUS_CART_ITEM', payload: id});