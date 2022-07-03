import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { GrCart } from "@react-icons/all-files/gr/GrCart";


function Cart({ cart, setCart }) {

  // const handleClickBack = () => {
  //   props.setConditionCart(false)
  // }


  const getTotalSum = () => {
    // console.log('total', cart)
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
    console.log(newCart)
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <div className='cart_modal'>
      <div className='cart_main'>
        <div className='cart_header'>
          <h1>SHOPPING CART</h1>
        </div>

        <div className='cart_body'>
          {cart.map((product) => (
            <div className='cart_body-elements'>
              <div className='cart_body-element'>
                <img className='img-cartbody' src={product.img} alt={product.name} />
                <div className='cart_body-element-main'>
                  <div className='cart_body-element-name'>
                    <h3>Name: {product.name}</h3>
                    <p>Describe: High fashion<br /> goods</p>
                  </div>

                  <div className='cart_body-element-cost'>
                    <p>Cost:     ${product.cost}</p>
                    {/* <input
                    value={product.quantity}
                    onChange={(e) =>
                      setQuantity(
                        product,
                        parseInt(e.target.value)
                      )
                    }
                  /> */}
                    <p>Quantity: {product.quantity}</p>
                    <h4>Total:    ${product.cost * product.quantity}</h4>
                  </div>
                </div>
              </div>
              <div className='cart_body-element-btn'>
                <button onClick={() => removeFromCart(product)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

        </div>

        <div className='cart_footer'>
          <div className='cart_footer-total'><h1>Total Cost: ${getTotalSum()}</h1></div>
          <div className='cart_footer-btn'>
            {cart.length > 0 && (
              <button className='btn_back' onClick={clearCart}>Clear Cart</button>
            )}
            <Link to='/checkout'><button className='btn_checkout'>Check out</button></Link>
          </div>

        </div>
      </div>

      <div className='cart_img'>

      </div>
    </div>


  )
}

export default Cart

