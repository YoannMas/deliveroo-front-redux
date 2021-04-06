import { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS IMPORT
import Restaurant from "../components/Restaurant";
import Section from "../components/Section";
import Cart from "../components/Cart";
import Loader from "../components/Loader";

const Content = () => {
  // Store data about restaurant and meals
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
    <Loader />
  ) : (
    <div className="content">
      <div className="container">
        <Restaurant data={data} />
      </div>
      <div className="menu-cart">
        <div className="container">
          <div className="menu">
            {data.categories.map((el, index) => {
              return <Section data={el} key={index} />;
            })}
          </div>
          <div className="cart-wrapper">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
