import Meal from "./Meal";
import PropTypes from "prop-types";

const Section = ({ data }) => {
  return (
    <div className="section">
      {data.meals.length > 0 && <h3>{data.name}</h3>}
      <div className="meal-wrapper">
        {data.meals.map((el) => {
          return <Meal data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};

Section.propTypes = {
  data: PropTypes.object,
};

export default Section;
