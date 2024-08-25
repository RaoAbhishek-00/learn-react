import { Link } from "react-router-dom";
import RestroCard, { withVegLabel } from "./RestroCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
import useRestaurantsData from "../utils/useRestaurantsData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilterdList] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  const resData = useRestaurantsData();

  useEffect(() => {
    setListOfRestaurants(resData);
    setFilterdList(resData);
  }, [resData]);

  const searchBtn = () => {
    const list = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterdList(list);
  };

  const filterBtn = () => {
    // * Filter logic
    const list = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
    setFilterdList(list);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const RestroCardWithLabel = withVegLabel(RestroCard);

  return (
    <div className="body">
      <div className="  py-2">
        <input
          className=" outline outline-1 rounded-md p-2  hover:bg-gray-100 mx-2  "
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="search restaurant"
        />

        <button
          className=" outline outline-1  items-center justify-center rounded-md p-2 bg-gray-300 text-gray-800 hover:bg-gray-700  "
          onClick={searchBtn}
        >
          search
        </button>
      </div>

      <div className="py-2">
        <button
          className=" outline outline-1  items-center justify-center rounded-md p-2 mx-2 bg-gray-300 text-gray-800 hover:bg-gray-700  "
          onClick={filterBtn}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap  bg-gray-100 gap-4 mt-2 p-2    ">
        {filteredList.map((item, index) => (
          <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
            {/* {console.log(item.info.veg)} */}
            {item.info.veg ? (
              <RestroCardWithLabel resData={item.info} />
            ) : (
              <RestroCard resData={item.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
