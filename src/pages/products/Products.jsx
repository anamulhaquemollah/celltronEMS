import { useContext } from "react";
import { ProductsContext } from "../../components/context/ProductsContext";


import "./products.css";
import SingleProduct from "./product/SingleProduct";
import Category from "./Category";

const Products = () => {
  const {products} = useContext(ProductsContext);

  return (
    <div className="product">
      <h1 className="products__page-title">our latest product</h1>
      <Category />
      <div className="products__container">
        {products.map((product) => (
          <SingleProduct
            key={product.uid}
            title={product.title}
            rating={product.review}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
