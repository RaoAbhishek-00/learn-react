import { Link } from "react-router-dom";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
import useRestaurantsData from "../utils/useRestaurantsData";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilterdList]=useState(listOfRestaurants)
  const [searchText, setSearchText] = useState("");

  const resData= useRestaurantsData();

  useEffect(()=>{
    setListOfRestaurants(resData);
        setFilterdList(resData)
  },[resData])

  

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
       

      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const list = listOfRestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterdList(list);
          }}
        >
          search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const list = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterdList(list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
      

        {filteredList.map((item, index) => (

          <Link key={item.info.id} to={"/restaurant/"+item.info.id}><RestroCard  resData={item.info} /></Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
