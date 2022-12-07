import { useState, useContext } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { ProductsContext } from "../../components/context/ProductsContext";

import "./products.css";


const Category = (category) => {
  const {categories} = useContext(ProductsContext);
  const [showMenu, setShowMenu] = useState(false);

  const categoryHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="category__component">
      <button className="category__button" onClick={categoryHandler}>
        Category
        {showMenu ? (
          <span className="category__arrow">
            <BsChevronCompactUp style={{ display: "inline" }} />
          </span>
        ) : (
          <span className="category__arrow">
            <BsChevronCompactDown style={{ display: "inline" }} />
          </span>
        )}
      </button>
      {showMenu && (
        <div className="dropdown-content">
          {categories.map((cat) => (
            <a href="javascript:void(0)" key={cat.uid}>
              {cat.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
