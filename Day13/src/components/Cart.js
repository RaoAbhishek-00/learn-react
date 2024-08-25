import { useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem"

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    // console.log(cartItems)
    return (
        <div>
            <h1>cart</h1>
            <div>
            
            {cartItems.map((item)=> <RestaurantItem data={item}/>)}
            </div>
        </div>
    )
}
export default Cart;