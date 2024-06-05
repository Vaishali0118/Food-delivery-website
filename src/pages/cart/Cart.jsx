import React, { useContext } from 'react'
import './cart.css'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  let{cartitem,food_list,removefromcart,gettotalcartamt}=useContext(StoreContext);
  const nagivate=useNavigate();
  return (
    <div className='cart' id='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr/>
        {
          food_list.map((item,index)=>{
              if(cartitem[item._id]>0){
                return(
                  <div>
                  <div className='cart-items-title cart-items-item'>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{cartitem[item._id]}</p>
                      <p>{item.price*cartitem[item._id]}</p>
                      <p className='cross' onClick={()=>removefromcart(item._id)}>x</p>
                  </div>
                  <hr />
                  </div>
                )
              }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Product Price</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${gettotalcartamt()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivert Fee</p>
              <p>${gettotalcartamt()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalcartamt()===0?0:gettotalcartamt()+2}</b>
            </div>
          </div>
          <button onClick={()=>nagivate('/order')}>PROCEED</button>
        </div>
        <div className="cart-promo">
          <div>
            <p>If you have a promo code, Enter it here.</p>
            <div className="cart-promo-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart