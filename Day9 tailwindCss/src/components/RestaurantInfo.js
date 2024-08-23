import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantItem from "./RestaurantItem";
import { API_URL } from "../utils/constants";

const RestaurantInfo = () => {
  const [restaurantInfo, setRestaurantinfo] = useState(null);
  const [restaurantItem, setRestaurantItem] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" +
          resId
      );
      const json = await response.json();
      const apiData = json?.data?.cards[2]?.card?.card?.info;
      // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
      const apiData2 =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;

      setRestaurantinfo(apiData);
      setRestaurantItem(apiData2 || []);
    };

    fetchData();
  }, [resId]);

  if (restaurantInfo === null || restaurantItem.length === 0) {
    return <div>no data</div>;
  }
  const { name, avgRating, cloudinaryImageId, costForTwoMessage, cuisines } =
    restaurantInfo;

  //    console.log(restaurantItem[1].card.info.name)

  const menuItemsList = restaurantItem.map((item) => item.card.info);
  //  console.log(menuItemsList);

  return (
    <div className="bg-slate-50">

      <div className="bg-gray-200 pt-2">
        <h3 className=" font-bold text-lg text-center pt-4 ">{name}</h3>

        <h3 className="italic ">{cuisines}</h3>
      </div>

      <div className="restaurantItem">
        {/* { <RestaurantItem data = {menuItemsList} /> } */}
        {menuItemsList.map((resItem) => (
          <RestaurantItem key={resItem.id} data={resItem} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantInfo;
