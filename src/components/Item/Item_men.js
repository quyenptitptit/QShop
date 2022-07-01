import React from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/men1.jpg'
import anh2 from '../../images/men2.jpg'
import anh3 from '../../images/men3.jpg'
import anh4 from '../../images/men4.jpg'
import anh5 from '../../images/men5.jpg'
import anh6 from '../../images/men6.jpg'
import './Item.css'

const data_men = [
  {
      id: 1,
      name: 'Furusha',
      img: anh1,
      price: 45
  }, {
      id: 2,
      name: 'Fuchsia',
      img: anh2,
      price: 35
  }, {
      id: 3,
      name: 'Hekei',
      img: anh3,
      price: 39
  }, {
      id: 4,
      name: 'Akisaha',
      img: anh4,
      price: 44
  }, {
      id: 5,
      name: 'Rumei',
      img: anh5,
      price: 32
  }, {
      id: 6,
      name: 'Feb',
      img: anh6,
      price: 45
  }
]

function Item_men() { 
  return (
    <div className='item'>
      {data_men.map(men => 
        <Item_element key={men.id} data={men} />
      )}
    </div>
  )
}


export default Item_men