import React, {useState} from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/men1.jpg'
import anh2 from '../../images/men2.jpg'
import anh3 from '../../images/men3.jpg'
import anh4 from '../../images/men4.jpg'
import anh5 from '../../images/men5.jpg'
import anh6 from '../../images/men6.jpg'
import './Item.css'


function Item_men({cart, setCart}) { 

  const [products] = useState([
    {
        id: 1,
        name: 'Furusha',
        img: anh1,
        cost: 45
    }, {
        id: 2,
        name: 'Fuchsia',
        img: anh2,
        cost: 35
    }, {
        id: 3,
        name: 'Hekei',
        img: anh3,
        cost: 39
    }, {
        id: 4,
        name: 'Akisaha',
        img: anh4,
        cost: 44
    }, {
        id: 5,
        name: 'Rumei',
        img: anh5,
        cost: 32
    }, {
        id: 6,
        name: 'Feb',
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


export default Item_men