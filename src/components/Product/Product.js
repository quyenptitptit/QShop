import React from 'react'
import './Product.css'
function Product(props) {
  return (
    <div className='product'>
        
        <div className='product-title'>
          <h1>{props.name}</h1>
          <h3>Spring Summer Design</h3>
          <h2>2022</h2>
        </div>

        <div className='product-img'>
          <img src={props.image} alt="product" />
        </div>
      
    </div>
  )
}

export default Product