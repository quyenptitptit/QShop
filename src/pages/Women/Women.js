import React from 'react'
import women from '../../images/women.jpg'
import Item_header from '../../components/Item/Item_header/Item_header'
import Item_women from '../../components/Item/Item_women'
import Product from '../../components/Product/Product'
import './Women.css'

function Women({cart, setCart}) {
  return (
    <div className='women'>
      <Product name="WOMEN" image={women} />
      <Item_header name="Skirt" />
      <Item_women cart={cart} setCart={setCart} />
    </div>
  )
}

export default Women