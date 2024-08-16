import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import {  useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search-container">Search</div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
        {listOfRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
