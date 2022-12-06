import "./products.css"; 

import SingleProduct from "./product/SingleProduct";

const Products = () => {
  return (
    <div className="product">
       <SingleProduct />
       <SingleProduct />
       <SingleProduct />
       <SingleProduct />
       <SingleProduct />
    </div>
  )
}

export default Products