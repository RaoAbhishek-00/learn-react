import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(data);
    
    const apiData = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    // console.log(apiData);
    setListOfRestaurants(apiData);
    
    
  };

  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }

  
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

          {/* {console.log(listOfRestaurants)}
          {console.log(typeof(listOfRestaurants))} */}
          
          {listOfRestaurants.map((item, index) =>(
            <RestroCard key={item.info.id} resData={item.info}/>
          ))}
       

      </div>
    </div>
  );
};

export default Body;
