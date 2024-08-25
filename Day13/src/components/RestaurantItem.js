import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const RestaurantItem = ({data})=>{
    const dispatch = useDispatch();
    // console.log(data);
    const {name, price, ratings ,imageId,description} = data;
    const handleAddItem = (data)=>{
        dispatch(addItem(data))
    }
    return (
        <div className=" border-b-2 flex ">
            
            <div>
            <h2>{name}</h2> 
            {/* <span>{ratings.aggregatedRating.rating}</span> */}
            <span>{price/100}</span> 
            <p>{description}</p>
            </div>
          
            <div><button onClick={()=>handleAddItem(data)} className="bg-gray-800 text-white p-2 m-2  ">add</button></div>
        </div>
    )
}

export default RestaurantItem;