import restaurantList from "../UTILS/restaurantlist.js";
import { useState } from "react";
import Products from "./Products.js";

const Body = () => {
  const [productsList, setproductList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setproductList(filterData);
          }}
        >
          TOP RESTAURANTS
        </button>
      </div>

      <div className="products">
        {productsList.map((res) => (
          <Products key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
