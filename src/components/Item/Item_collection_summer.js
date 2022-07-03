import React, {useState} from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/collection-summer1.jpg'
import anh2 from '../../images/collection-summer2.jpg'
import anh3 from '../../images/collection-summer3.jpg'
import anh4 from '../../images/collection-summer4.jpg'
import anh5 from '../../images/collection-summer5.jpg'
import anh6 from '../../images/collection-summer6.jpg'
import './Item.css'



function Item_collection_summer({cart, setCart}) { 
  const [products] = useState([
    {
        id: 1,
        name: 'April',
        img: anh1,
        cost: 45
    }, {
        id: 2,
        name: 'Aurora',
        img: anh2,
        cost: 35
    }, {
        id: 3,
        name: 'Claire',
        img: anh3,
        cost: 39
    }, {
        id: 4,
        name: 'Daisy',
        img: anh4,
        cost: 44
    }, {
        id: 5,
        name: 'Florence',
        img: anh5,
        cost: 32
    }, {
        id: 6,
        name: 'Freya',
        img: anh6,
        cost: 45
    }
  ])
  return (
    <div className='item'>
      <Item_element products={products} cart={cart} setCart={setCart} />
    </div>
  )
}


export default Item_collection_summer