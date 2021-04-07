const initialState = {
  cart: [],
  total: 0,
};

const cartRecucer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let alreadyInCart = false;
      const cartAdd = state.cart.map((el) => {
        // Check if the selected meal is already in the cart, if it is add 1 to quantity
        if (el.id === action.meal.id) {
          alreadyInCart = true;
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      // If meal is not in the cart, add the meal
      if (alreadyInCart === false) {
        cartAdd.push({ ...action.meal, quantity: 1 });
      }
      return {
        ...state,
        cart: cartAdd,
        // Update de total with price of new meal
        total: state.total + Number(action.meal.price),
      };
    case "REMOVE":
      const cartRemove = [...state.cart];
      for (let i = 0; i < cartRemove.length; i++) {
        if (cartRemove[i].id === action.meal.id) {
          // If quantity is 1, delete the meal from the cart
          if (cartRemove[i].quantity === 1) {
            cartRemove.splice(i, 1);
          } else {
            // If quantity is above 1, remove 1 to quantity
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
