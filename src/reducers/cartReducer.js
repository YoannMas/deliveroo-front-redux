const initialState = {
  cart: [],
  total: 0,
};

const cartRecucer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD":
      let alreadyInCart = false;
      const cartTemp = state.cart.map((el) => {
        if (el.id === action.meal.id) {
          alreadyInCart = true;
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      if (alreadyInCart === false) {
        cartTemp.push({ ...action.meal, quantity: 1 });
      }
      return {
        ...state,
        cart: cartTemp,
      };
    default:
      return state;
  }
};

export default cartRecucer;
