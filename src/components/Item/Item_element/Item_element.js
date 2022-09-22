import React from 'react'
import './Item_element.css'
import '../Item.css'


function Item_element({ products, cart, setCart }) {
    const checkLogin = localStorage.getItem('checkLogin')

    const addToCart = (product) => {
        let newCart = [...cart];
        console.log('newCart', newCart)
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
        console.log("newcart", newCart)
        console.log("cart", cart)
    };


    return (
        <div className='item'>
            {products.map(product =>
                <div className='item_element'>
                    <img src={product.img} alt={product.name} />

                    <div className='item_element-name'>
                        <h1>{product.name}</h1>
                        <h1>${product.cost}</h1>
                    </div>

                    <div className='item_element-btn'>
                        <button onClick={() => addToCart(product)} >
                            Add to cart
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Item_element