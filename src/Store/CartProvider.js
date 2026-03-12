import { useState } from "react";
import CartContext from "./Cart-context";
const CartProvider=(props)=>{   
    const[items,updateItems]=useState([]);
    const addItemToCartHandler = (item) =>{
        updateItems([...items,item]);
        cartContext.items.push(item)
        console.log(' inside addItemToCartHandler',cartContext);
       }
       
     const removeItemFromCartHandler = (id) =>{
    
        }
    const cartContext={
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message:'Click here'
    }
    return <CartContext.Provider value={cartContext}>
     {console.log('inside CartContext.Provider',cartContext)}
   {props.children}
    </CartContext.Provider>
}
export default CartProvider;