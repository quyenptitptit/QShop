import { useState } from 'react';
import data from './Data.json'
import './Search.css'
function Search({ filteredData, cart, setCart }) {

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
        <>
            {filteredData.length != 0 ? (
                <div className='search_componont'>
                    {filteredData.map(data => (
                        <div className='search-element'>
                            <img className='img-search' src={data.img} alt={data.name} />
                            <div className='search-element-name'>
                                <h1>Product: {data.name}</h1>
                                <h1>Cost: ${data.cost}</h1>
                                <h1>Describe: High fashion</h1>
                                <button className='search-element-btn' 
                                    onClick={() => addToCart(data)}>Add to cart</button>
                            </div>
                            <div className='search_element-btn'>
                                
                            </div>
                        </div>
                    ))}
                </div>
            ) : 'hi'}
        </>
    )
}


export default Search