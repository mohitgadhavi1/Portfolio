import React,{useContext,useState} from "react";
import classes from "./Getsby.module.scss";
import Mealimage from "../../../Components/assets/meals.jpg";
import CartIcon from "../../../UI/icons/CartIcon";
import Button from "../../../UI/Button";
import Meals from "./Meals";
import Cart from "./Cart";
import CartProvider from "./store/CartProvider";
import CartContex from "./store/CartContex";


function Getsby() {

const CartCtx = useContext(CartContex);

const numOfCartItems = CartCtx.items.reduce((curNumber,item)=>{
  return curNumber + item.amount;
},0)

const [cartIsShown,setCartIsShown] = useState(false);

const showCartHandler = () => { 
  setCartIsShown(true);
  
}

const hideCartHandler = () => {
  setCartIsShown(false);
}

  return (
    <CartProvider>
     {cartIsShown && <Cart  onClose={hideCartHandler} />}
      <Button className={classes.cartbtn} onClick={showCartHandler} >
        <span className={classes.cartbtnicon}>
          <CartIcon />
        </span>
        <span>Your items</span>
        <span className={classes.badge}>{numOfCartItems}</span>
      </Button>

      <div className={classes["main-image"]}>
        <img src={Mealimage} alt="restarunt-menu" />
      </div>
      <Meals />
    </CartProvider>
  );
}

export default Getsby;
