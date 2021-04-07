import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Meal = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="meal"
      // on click, add that meal on cart
      onClick={() => {
        dispatch({ type: "ADD", meal: data });
      }}
      data-testid="menu-item-card"
    >
      <div className="infos">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <div>
          <span>{data.price.replace(".", ",")} €</span>
          {data.popular ? (
            <span style={{ color: "#ff8000", fontSize: 12, fontWeight: 700 }}>
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {data.picture ? <img src={data.picture} alt={data.title}></img> : ""}
    </div>
  );
};

Meal.propTypes = {
  data: PropTypes.object,
};

export default Meal;
