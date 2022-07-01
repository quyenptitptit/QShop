import React from 'react'
import './Cart.css'
import { GrCart } from "@react-icons/all-files/gr/GrCart";


function Cart(props, { cart, setCart }) {

  const handleClickBack = () => {
    props.setConditionCart(false)
  }


  const getTotalSum = () => {
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
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <div className='cart_modal'>
      <div className='cart_overlay'></div>

      <div className='cart_main'>
        <div className='cart_header'>
          <h1>CART</h1>
        </div>

        <div className='cart_body'>
          {cart.length > 0 ?
            <>
              {cart.map((product, idx) => (
                <div className="product" key={idx}>
                  <h3>{product.name}</h3>
                  <h4>${product.cost}</h4>
                  <input
                    value={product.quantity}
                    onChange={(e) =>
                      setQuantity(
                        product,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <img src={product.image} alt={product.name} />
                  <button onClick={() => removeFromCart(product)}>
                    Remove
                  </button>
                </div>
              ))}
              <div>Total Cost: ${getTotalSum()}</div>
            </>
            : 'There is no one in the cart'
          }
        </div>

        <div className='cart_footer'>
          <button onClick={handleClickBack} className='btn_back'>Back</button>
          <button className='btn_checkout'>Check out</button>
          {cart.length > 0 && (
            <button onClick={clearCart} className='btn-back'>Clear Cart</button>
          )}
        </div>
      </div>
    </div>


  )
}

export default Cart