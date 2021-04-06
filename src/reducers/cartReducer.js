const initialState = {
  cart: [],
  total: 0,
};

const cartRecucer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let alreadyInCart = false;
      const cartAdd = state.cart.map((el) => {
        if (el.id === action.meal.id) {
          alreadyInCart = true;
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      if (alreadyInCart === false) {
        cartAdd.push({ ...action.meal, quantity: 1 });
      }
      return {
        ...state,
        cart: cartAdd,
        total: state.total + Number(action.meal.price),
      };
    case "REMOVE":
      const cartRemove = [...state.cart];
      for (let i = 0; i < cartRemove.length; i++) {
        if (cartRemove[i].id === action.meal.id) {
          if (cartRemove[i].quantity === 1) {
            cartRemove.splice(i, 1);
          } else {
            cartRemove[i].quantity -= 1;
          }
        }
      }
      return {
        ...state,
        cart: cartRemove,
        total: state.total - action.meal.price,
      };
    default:
      return state;
  }
};

export default cartRecucer;
