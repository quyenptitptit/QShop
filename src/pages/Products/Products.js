import React from 'react'
import Product from '../../components/Product/Product'
import Item_header from '../../components/Item/Item_header/Item_header'
import products from '../../images/products.jpg'
import './Products.css'
import Item_product from '../../components/Item/Item_product'

function Products({cart, setCart}) {
  return (
    <div className='products'>
      <Product name="PRODUCTS" image={products} />
      <Item_header name="What's new?" />
      <Item_product cart={cart} setCart={setCart} />
    </div>
  )
}

export default Products