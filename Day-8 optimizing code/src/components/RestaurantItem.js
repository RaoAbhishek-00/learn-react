

const RestaurantItem = ({data})=>{
    // console.log(data);
    const {name, price, ratings ,imageId} = data;
    return (
        <div>
            {name}
            {ratings.aggregatedRating.rating}
            {price/100}
        </div>
    )
}

export default RestaurantItem;