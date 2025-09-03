import React, { useContext,useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css'
import { useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
    const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""
    })


    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const placeOrder=async (event)=>{
        event.preventDefault();
        let orderItems=[];
        food_list.map((item)=>{
            if(cartItems[item._id]>0){
                let itemInfo=item;
                itemInfo['quantity']= cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData={
            address:data,
            items:orderItems,
            amount:getTotalCartAmount()+2,
        }
        let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}}) 
        if(response.data.success){
            const {session_url}=response.data;
            window.location.replace(session_url);
        }
        else{
            alert("Error");
        }
    }
   

    const navigate= useNavigate();
   useEffect(() => {
    const checkCart = () => {
      if (!token) {
        alert("Oops! You are not signed in!");
        navigate('/cart');
      } else if (getTotalCartAmount() === 0) {
        alert("Cart is Empty!");
        navigate('/cart');
      }
    };
    checkCart();
  }, [token, getTotalCartAmount, navigate]);
  return (
    <div>
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input required name='firstName'  onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
                    <input required name='lastName'  onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
                </div>
                <input required name='email'  onChange={onChangeHandler} value={data.email} type="Email" placeholder='Email Address' />
                <input required name='street'  onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
                <div className="multi-fields">
                    <input required name='city'  onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
                    <input required name='state'  onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input name='zipcode'  onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='zip code'/>
                    <input required name='country'  onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                </div>
                <input required name='phone'  onChange={onChangeHandler} value={data.phone} type="number" placeholder='Mobile number' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                
                    <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
                </div>
                <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
                </div>
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                </div>
                    <button type='submit'>PROCEED TO PAYMENT</button>

                </div>
            </div>
            
        </form>
    </div>
  )
}

export default PlaceOrder

