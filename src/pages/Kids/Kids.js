import React from 'react'
import Product from '../../components/Product/Product'
import Item_header from '../../components/Item/Item_header/Item_header'
import Item_kids from '../../components/Item/Item_kids'
import kids from '../../images/kids.jpg'
import './Kids.css'

function Kids() {
  return (
    <div>
      <Product name="Kids" image={kids} />
      <Item_header name="cute outfits for babies?" />
      <Item_kids />
      <Item_header name="cute baby accessories?" />
    </div>
  )
}

export default Kids