import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const Cart = () => {
  
  const  {cartItems,food_list,removeFromCart,getTotalCartAmount,url,discount,setDiscount} = useContext(StoreContext);
  const navigate=useNavigate();
  const [value,setValue]=useState("")
  const promoDiscount=(code)=>{
    if(code.length !== 7){
      toast.error("Invalid promocode")
      setValue("")
    }else if(code.substring(0,5)==="PROMO"){
        let discValue=parseInt(code.substring(5))
        if(!isNaN(discValue)){

          if(discValue<getTotalCartAmount()){
            setDiscount(discValue)
            toast.success(`Congratulations! You got flat $${discValue} discount`)
          }else{
            toast.error(`Add item of ${getTotalCartAmount()-discValue+2} $ to access this coupan`)
          }
        }
        
        setValue("")
    }else{
        toast.error("Invalid promocode")
    }
  }

  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : 2;
  let finalTotal = subtotal + delivery;
  finalTotal = Math.max(0, finalTotal - discount);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qunatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br/>
      <hr />
      {food_list.map((item,index)=>{
        if(cartItems[item._id]> 0){
            return(
              <div>
                 <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>:
                  <p>${item.price*cartItems[item._id]}</p>
                  <p  onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />

              </div>
             
            )
        }
      })}
      <div className="cart-bottom">

          <div className="card-promo">
            <div>
                <p>If you have promocode,Enter it here</p>
                <div className="cart-promocode-input">
                  <input 
                    type='text' 
                    placeholder='i.e PROMO10'
                    value={value}
                    onChange={(event)=>setValue(event.target.value)}
                  ></input>
                  <button onClick={()=>promoDiscount(value)}>Submit</button>
                </div>
            </div>
          </div>
          

          <div className="cart-total">
            <h2>Cart Totals</h2>
          
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${delivery}</p>
            </div>
            <div className="cart-total-details">
                <p>Total</p>
                <p>${finalTotal}</p>
               
                
            </div>
            <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>

          </div>
          
      </div>

    </div>
  )
}

export default Cart
