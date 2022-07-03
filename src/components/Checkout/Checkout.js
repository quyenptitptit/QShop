import React from 'react'
import '../Cart/Cart.css'
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Checkout.css'

function Checkout({ cart, setCart }) {

  const getTotalSum = () => {
    // console.log('total', cart)
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  return (
    <div className='cart_modal'>
      <div className='cart_main-pay'>
        <div className='cart_header'>
          <h1>Payment</h1>
        </div>

        <div className='cart_body'>
          <div className='label-element'>
            <label>Name: <input type='text' className='text-bill' /></label><br />
          </div>
          <div className='label-element'>
            <label>Number phone: <input type='text' className='text-bill' /></label><br />
          </div>
          <div className='label-element'>
            <label>Address: <input type='text' className='text-bill' /></label><br />
          </div>
          <h1>Total payment: ${getTotalSum()}</h1>
        </div>



        <div className='cart_footer-btn'>
          <Link to='/cart'><button className='btn_back'>Back</button></Link>
          <Link to='/home'><button className='btn_checkout' 
            onClick={() => setCart([]) } >Payment</button></Link>
        </div>


      </div>

      <div className='cart_img-pay'>

      </div>
    </div>
  )
}

export default Checkout