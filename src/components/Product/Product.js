import React from 'react'
import './Product.css'
function Product(props) {
  return (
    <div className='product'>
        
        <div className='product-title'>
          <div className='product_title'>
          <h1>{props.name} DESIGN</h1>
          <h2>Spring Summer</h2>
          <h2>2022</h2>
          </div>
        </div>

        <div className='product-img'>
          <img src={props.image} alt="product" />
        </div>
      
    </div>
  )
}

export default Product