import React from 'react'
import './Item_element.css'


function Item_element(props) {
    return (
    <div className='item_element'>
        <img src={props.data.img} alt={props.data.name} />
        
        <div className='item_element-name'>
            <h1>{props.data.name}</h1>
            <h1>${props.data.price}</h1>
        </div>

        <div className='item_element-btn'>
            <button onClick={() => props.addToCart(props.data)} >
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default Item_element