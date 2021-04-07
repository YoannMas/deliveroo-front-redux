import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";

const Choice = () => {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();

  // Iterate on each meal and display them
  return cart.map((el) => {
    return (
      <div className="choice" key={el.id} data-testid="cart-line">
        <div className="counter">
          {/* Button for removing a quantity of a meal*/}
          <FontAwesomeIcon
            icon="minus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "REMOVE", meal: el });
            }}
            data-testid="minus-btn"
          />
          <span
            style={{ color: "#868a8a", padding: "0 5px", fontSize: 20 }}
            data-testid="item-quantity"
          >
            {el.quantity}
          </span>
          {/* Button for adding a quantity of a meal*/}
          <FontAwesomeIcon
            icon="plus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "ADD", meal: el });
            }}
            data-testid="plus-btn"
          />
        </div>
        <ul className="choice-infos">
          <li style={{ width: 200 }}>{el.title}</li>
          {/* Calcul total price for a quantity of meal */}
          <li>{(el.price * el.quantity).toFixed(2).replace(".", ",")} €</li>
        </ul>
      </div>
    );
  });
};

export default Choice;
