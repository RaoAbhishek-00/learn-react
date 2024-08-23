import { useEffect, useState } from "react";

const useRestaurantsData = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(data);

    setApiData(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    // console.log(apiData);
  };

  return apiData;
};

export default useRestaurantsData;
