import React,{ useContext } from 'react';
import Modal from '../UI/Modal';
import classes from'./Cart.Module.css';
import CartCntxt from '../../Store/Cart-context';

const Cart = (props) => {
    const cartcntxt = useContext(CartCntxt);
    //const totalAmount = `$${CartCntxt.totalAmount.toFixed(2)}`
    const hasItems=CartCntxt.items.length>0;
      const cartItems=<ul className={classes['cart-items']}>
     {cartcntxt.items.map((item) => (
        
            <li key={item.id}> Name:{item.name} - Price:{item.price} * Quantity:{item.quantity}</li>
            
                 ))}
         </ul>
    
    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
                </button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
)
}
export default Cart;