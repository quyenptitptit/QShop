import React, {useState} from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/collection-spring1.jpg'
import anh2 from '../../images/collection-spring2.jpg'
import anh3 from '../../images/collection-spring3.jpg'
import anh4 from '../../images/collection-spring4.jpg'
import anh5 from '../../images/collection-spring5.jpg'
import anh6 from '../../images/collection-spring6.jpg'
import './Item.css'



function Item_collection_spring({cart, setCart}) { 
  const [products] = useState([
    {
        id: 1,
        name: 'Iris',
        img: anh1,
        cost: 45
    }, {
        id: 2,
        name: 'Jade',
        img: anh2,
        cost: 35
    }, {
        id: 3,
        name: 'Maxwell',
        img: anh3,
        cost: 39
    }, {
        id: 4,
        name: 'Pascal',
        img: anh4,
        cost: 44
    }, {
        id: 5,
        name: 'Owen',
        img: anh5,
        cost: 32
    }, {
        id: 6,
        name: 'Violet',
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


export default Item_collection_spring