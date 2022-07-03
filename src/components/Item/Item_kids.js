import React, {useState} from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/kids1.jpg'
import anh2 from '../../images/kids2.jpg'
import anh3 from '../../images/kids3.jpg'
import anh4 from '../../images/kids4.jpg'
import anh5 from '../../images/kids5.jpg'
import anh6 from '../../images/kids6.jpg'
import './Item.css'


function Item_kids({cart, setCart}) { 
  const [products] = useState([
    {
        id: 1,
        name: 'Liam',
        img: anh1,
        cost: 45
    }, {
        id: 2,
        name: 'Noah',
        img: anh2,
        cost: 35
    }, {
        id: 3,
        name: 'Oliver',
        img: anh3,
        cost: 39
    }, {
        id: 4,
        name: 'Eva',
        img: anh4,
        cost: 44
    }, {
        id: 5,
        name: 'Bella',
        img: anh5,
        cost: 32
    }, {
        id: 6,
        name: 'William',
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


export default Item_kids