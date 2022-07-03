import React from 'react'
import Product from '../../components/Product/Product'
import Item_header from '../../components/Item/Item_header/Item_header'
import Item_men from '../../components/Item/Item_men'
import men from '../../images/men.jpg'
import './Men.css'

function Men({cart, setCart}) {
  return (
    <div>
      <Product name="MEN COOL" image={men} />
      <Item_header name="What to wear ?" />
      <Item_men cart={cart} setCart={setCart} />
    </div>
  )
}

export default Men