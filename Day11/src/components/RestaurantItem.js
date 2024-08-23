

const RestaurantItem = ({data})=>{
    // console.log(data);
    const {name, price, ratings ,imageId,description} = data;
    return (
        <div className=" border-b-2  ">
            <h2>{name}</h2> 
            
            <span>{ratings.aggregatedRating.rating}</span>
            <span>{price/100}</span> 
            <p>{description}</p>
            
        </div>
    )
}

export default RestaurantItem;