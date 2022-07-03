import React, { useState } from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/products1.jpg'
import anh2 from '../../images/products2.jpg'
import anh3 from '../../images/products3.jpg'
import anh4 from '../../images/products4.jpg'
import anh5 from '../../images/products5.jpg'
import anh6 from '../../images/products6.jpg'
import './Item.css'
import './Item_element/Item_element.css'


function Item_product({ cart, setCart }) {

  const [products] = useState([
    {
      id: 1,
      name: 'Heydi',
      img: anh1,
      cost: 30
    }, {
      id: 2,
      name: 'Fuchsia',
      img: anh2,
      cost: 35
    }, {
      id: 3,
      name: 'Helen',
      img: anh3,
      cost: 37
    }, {
      id: 4,
      name: 'Simone',
      img: anh4,
      cost: 43
    }, {
      id: 5,
      name: 'Rocha',
      img: anh5,
      cost: 26
    }, {
      id: 6,
      name: 'Fabricant',
      img: anh6,
      cost: 39
    }
  ])


  return (
    <div className='item'>
      <Item_element products={products} cart={cart} setCart={setCart} />
    </div>
  )
}


export default Item_product
