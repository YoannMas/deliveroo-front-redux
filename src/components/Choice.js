import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";

const Choice = () => {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();

  return cart.map((el) => {
    return (
      <div className="choice" key={el.id}>
        <div className="counter">
          <FontAwesomeIcon
            icon="minus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "REMOVE", meal: el });
            }}
          />
          <span style={{ color: "#868a8a", padding: "0 5px", fontSize: 20 }}>
            {el.quantity}
          </span>
          <FontAwesomeIcon
            icon="plus"
            style={{ color: "#03cdbd", fontSize: 14, cursor: "pointer" }}
            onClick={() => {
              dispatch({ type: "ADD", meal: el });
            }}
          />
        </div>
        <ul className="choice-infos">
          <li style={{ width: 200 }}>{el.title}</li>
          <li>{(el.price * el.quantity).toFixed(2)} €</li>
        </ul>
      </div>
    );
  });
};

export default Choice;
