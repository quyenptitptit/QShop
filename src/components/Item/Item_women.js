import React, {useState} from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/women1.jpg'
import anh2 from '../../images/women2.jpg'
import anh3 from '../../images/women3.jpg'
import anh4 from '../../images/women4.jpg'
import anh5 from '../../images/women5.jpg'
import anh6 from '../../images/women6.jpg'
import './Item.css'
import './Item_element/Item_element.css'


function Item_women({ cart, setCart }) { 
  const [products] = useState([
    {
        id: 1,
        name: 'Girl',
        img: anh1,
        cost: 45
    }, {
        id: 2,
        name: 'Fuchsia',
        img: anh2,
        cost: 35
    }, {
        id: 3,
        name: 'Helen',
        img: anh3,
        cost: 39
    }, {
        id: 4,
        name: 'Akisaha',
        img: anh4,
        cost: 44
    }, {
        id: 5,
        name: 'Rose',
        img: anh5,
        cost: 32
    }, {
        id: 6,
        name: 'Feburay',
        img: anh6,
        cost: 45
    }
  ])
console.log("cart", cart)
  return (
    <div className='item'>
      <Item_element products={products} cart={cart} setCart={setCart} />
    </div>
  )
}


export default Item_women