import React from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/women1.jpg'
import anh2 from '../../images/women2.jpg'
import anh3 from '../../images/women3.jpg'
import anh4 from '../../images/women4.jpg'
import anh5 from '../../images/women5.jpg'
import anh6 from '../../images/women6.jpg'
import './Item.css'

const data_women = [
  {
      id: 1,
      name: 'Girl',
      img: anh1,
      price: 45
  }, {
      id: 2,
      name: 'Fuchsia',
      img: anh2,
      price: 35
  }, {
      id: 3,
      name: 'Helen',
      img: anh3,
      price: 39
  }, {
      id: 4,
      name: 'Akisaha',
      img: anh4,
      price: 44
  }, {
      id: 5,
      name: 'Rose',
      img: anh5,
      price: 32
  }, {
      id: 6,
      name: 'Feburay',
      img: anh6,
      price: 45
  }
]

function Item_women() { 
  return (
    <div className='item'>
      {data_women.map(women => 
        <Item_element key={women.id} data={women} />
      )}
    </div>
  )
}


export default Item_women