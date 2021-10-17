import React from 'react';
import classes from './Getsby.module.scss';


function Cart(props) {
    const CartItems = <ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount:'2',price:'$15'}].map(item =>
        <li>{item.name}</li>
    )}</ul>



    return (  
        <>
        <div className={classes.backdrop} onClick={props.onClose}></div>
        <div onClose={props.onClose} className={classes.cart} >
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.5</span>
            </div>
            <div className={classes.actions}>
                 <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                 <button className={classes.button}>Order</button>
            </div>
        </div>  
        </>
    )
}

export default Cart;
