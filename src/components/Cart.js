import { useSelector } from "react-redux";

// COMPONENTS IMPORT
import Choice from "./Choice";

const Cart = () => {
  let fees = 2.5;

  const cart = useSelector((state) => {
    return state.cart;
  });

  const total = useSelector((state) => {
    return state.total;
  });

  return (
    <div className="cart">
      <button className={cart.length > 0 ? "button" : "button disabled"}>
        Valider mon panier
      </button>
      {cart.length > 0 ? (
        <>
          <div className="choices">
            {/* Display selected meals if the cart is not empty */}
            <Choice />
          </div>
          <div className="calcul">
            <div>
              <span>Sous-total</span>
              <span>{total.toFixed(2).replace(".", ",")} €</span>
            </div>
            <div>
              <span>Frais de livraison</span>
              <span>{fees.toFixed(2).replace(".", ",")} €</span>
            </div>
          </div>
          <div className="total">
            <span>Total</span>
            <span data-testid="cart-amount">
              {(total + fees).toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </>
      ) : (
        <div
          style={{
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 16, color: "#868A8A" }}>
            Votre panier est vide
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
