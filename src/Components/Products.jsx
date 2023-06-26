import React, { useEffect } from "react";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

import { STATUS, fetchProducts } from "../store/ProductsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };

    // fetchProducts();
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
  };
  if (status === STATUS.LOADING) {
    return <h2>Loading.......</h2>;
  }

  if (status === STATUS.ERROR) {
    return <h2>Error.......</h2>;
  }
  return (
    <>
      <div className="productsWrapper">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="Cart_Image" />
            <h1>{item.title}</h1>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleAdd(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
