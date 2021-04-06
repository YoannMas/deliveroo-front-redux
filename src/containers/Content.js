import { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS IMPORT
import Restaurant from "../components/Restaurant";
import Section from "../components/Section";

const Content = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-express.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div className="content">
      <div className="container">
        <Restaurant data={data} />
      </div>
      <div className="menu-cart">
        <div className="container">
          <div className="menu">
            {data.categories.map((el, index) => {
              if (el.meals.length > 0) {
                return <Section data={el} key={index} />;
              }
            })}
          </div>
          {/* <div className="cart-wrapper">
            <Cart data={data} cart={cart} setCart={setCart} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Content;