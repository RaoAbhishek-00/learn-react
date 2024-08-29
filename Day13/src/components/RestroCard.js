import { CDN_URL } from "../utils/constants";


export default  Restrocard = ({ resData }) => {

  
  return (
    <div className="  w-56 border border-black   " data-testid="restroCard">
      <img
        src={CDN_URL + resData.cloudinaryImageId}
        alt=""
        className="restro-logo"
      />

      <h3 className=" font-bold text-lg ">{resData.name}</h3>

      <h3> {resData.avgRating} rating </h3>

      <h3>{resData.deliveryTime} minutes</h3>

      <h3>{resData.cuisines.join(", ")}</h3>
    </div>
  );
};

export const withVegLabel=(Restrocard)=>{
  return (
    (props)=>{
      return (
        <div>
          <label className="absolute bg-gray-700 text-white  ">veg</label>
          <Restrocard {...props} />
        </div>
      )
    }
  )
}


