import React from 'react'
import Product from '../../components/Product/Product'
import Item_header from '../../components/Item/Item_header/Item_header'
import products from '../../images/products.jpg'
import './Products.css'
import Item_product from '../../components/Item/Item_product'

function Products() {
  return (
    <div className='products'>
      <Product name="Products" image={products} />
      <Item_header name="What's new?" />
      <Item_product />
      <Item_header name="It's so hot" />
      <Item_header name="Promotion" />
      
    </div>
  )
}

export default Products