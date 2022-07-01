import React from 'react'
import Product from '../../components/Product/Product'
import Item_header from '../../components/Item/Item_header/Item_header'
import Item_men from '../../components/Item/Item_men'
import men from '../../images/men.jpg'
import './Men.css'

function Men() {
  return (
    <div>
      <Product name="Men" image={men} />
      <Item_header name="What to wear ?" />
      <Item_men />
      <Item_header name="Accessory beautyful !!" />
    </div>
  )
}

export default Men