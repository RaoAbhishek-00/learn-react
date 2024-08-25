import RestaurantItem from "./RestaurantItem";
import ItemsList from "./CategoryList";
import CategoryList from "./CategoryList";
import { useState } from "react";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
   
  // console.log(data);
  // console.log(data.categories[0].itemCards[0].card.info.name)
    const handleClick=()=>{
        setShowIndex();
    }

  return (

      <div className="w-6/12 mx-auto bg-gray-300 shadow-lg my-4   ">
        <h2 className="font-bold text-2xl cursor-pointer    " onClick={handleClick} >{data.title}  </h2>
      
    
        {data.categories.map((item) => (
         showItems && <CategoryList data={item} />
        ))}
      
    </div>
  );
};

export default RestaurantCategory;
