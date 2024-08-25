import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantItem from "./RestaurantItem";
import { API_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  const [restaurantInfo, setRestaurantinfo] = useState(null);
  const [restaurantItem, setRestaurantItem] = useState([]);
  const [restaurantCategories, setRestaurantCatagories] = useState([]);
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0)
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

      // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.["@type"])
      setRestaurantCatagories(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
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

  const filteredCategories = restaurantCategories.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  console.log(filteredCategories);

  return (
    <div className="bg-slate-50">
      <div className="bg-gray-200 pt-2">
        <h3 className=" font-bold text-lg text-center pt-4 ">{name}</h3>

        <h3 className="italic ">{cuisines}</h3>
      </div>

      <div className="restaurantItem">
        {/* { <RestaurantItem data = {menuItemsList} /> } */}

        {/* {menuItemsList.map((resItem) => (
          <RestaurantItem key={resItem.id} data={resItem} />
        ))} */}

        {filteredCategories.map((data,index) => (
          // console.log(data.card.card.categories[0].itemCards[0].card.info)
          <RestaurantCategory
            key={data.card.card.title}
            data={data.card.card}
            showItems={index === showIndex  && true}
            setShowIndex= {()=>{setShowIndex(index)}}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantInfo;
