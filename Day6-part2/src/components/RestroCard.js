import { CDN_URL } from "../utils/constants";

const Restrocard = ({resData}) => {
    return(
      <div className="restro-card">
       
      {/* {console.log(resData)}
      {console.log(typeof (resData))} */}

       {/* <h3>{resData.name}</h3> */}
       
       <img src={
            CDN_URL +
            resData.cloudinaryImageId
          } alt="" className="restro-logo"/>
  
        <h3>{resData.name}</h3>
  
        <h3> {resData.avgRating} rating </h3>
  
        <h3>{resData.deliveryTime} minutes</h3>
  
        <h3>{resData.cuisines.join(', ')}</h3> 
  
        

      </div>
    )
  }

  export default Restrocard;