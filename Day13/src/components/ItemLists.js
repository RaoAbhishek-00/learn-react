import RestaurantItem from "./RestaurantItem";

export default ItemLists = ({data}) => {

    // console.log(data.map((item)=>item.card.info));
    

    return (
        <div>
             {data.map((item)=> <RestaurantItem data={item.card.info} />)}
        </div>
    )
}