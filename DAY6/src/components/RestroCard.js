import { CDN_URL } from "../utils/constants";

const Restrocard = (props) => {
    const {resData} = props;
    return(
      <div className="restro-card">
  
        <img src={
            CDN_URL +
            resData.data.cloudinaryImageId
          } alt="" className="restro-logo"/>
  
        <h3>{props.resData.data.name}</h3>
  
        <h3> {resData.data.avgRating} rating </h3>
  
        <h3>{resData.data.deliveryTime} minutes</h3>
  
        <h3>{resData.data.cuisines.join(', ')}</h3> 
  
        <h3>₹{resData.data.costForTwo / 100} FOR TWO</h3>
      </div>
    )
  }

  export default Restrocard;