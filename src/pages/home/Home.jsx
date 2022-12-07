import { useEffect, useState } from "react";
import axios, { getAuthHeader } from "../../api/axios";

import { ProductsContext } from "../../components/context/ProductsContext";

import "./home.css";
import human from "../../assets/human.png";
import Products from "../products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const isAuthHeaderExist = axios.defaults.headers.common["Authorization"];

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://199.192.16.173:5000/api/v1/product/",
          { headers: getAuthHeader() }
        );

        setProducts(data.data["results"]);
      } catch (e) {}
    })();
  }, [isAuthHeaderExist]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://199.192.16.173:5000/api/v1/category/",
          { headers: getAuthHeader() }
        );

        setCategories(data.data["results"]);
      } catch (e) {}
    })();
  }, [isAuthHeaderExist]);

  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__left">
            <h1>
              <span>upto 60% off</span>
              <br />
              on every new <br />
              arrival <br />
              collection <br />
            </h1>
            <button className="explore-btn">Explore Now</button>
          </div>
          <div className="home__right">
            <img
              className="home__right-image"
              src={human}
              alt="a stylish man"
            />
          </div>
        </div>
      </div>
      <ProductsContext.Provider value={{ products, categories }}>
        <Products />
      </ProductsContext.Provider>
    </>
  );
};

export default Home;
