import Meal from "./Meal";

const Section = ({ data, setCart, cart }) => {
  return (
    <div className="section">
      <h3>{data.name}</h3>
      <div className="meal-wrapper">
        {data.meals.map((el) => {
          return <Meal data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};

export default Section;