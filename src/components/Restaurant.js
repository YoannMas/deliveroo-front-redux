import PropTypes from "prop-types";

const Restaurant = ({ data }) => {
  return (
    <div className="restaurant">
      <div>
        <h2>{data.restaurant.name}</h2>
        <p>{data.restaurant.description}</p>
      </div>
      <img src={data.restaurant.picture} alt={data.name} />
    </div>
  );
};

Restaurant.propTypes = {
  data: PropTypes.object,
};

export default Restaurant;
