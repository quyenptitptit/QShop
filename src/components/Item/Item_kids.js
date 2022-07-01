import React from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/kids1.jpg'
import anh2 from '../../images/kids2.jpg'
import anh3 from '../../images/kids3.jpg'
import anh4 from '../../images/kids4.jpg'
import anh5 from '../../images/kids5.jpg'
import anh6 from '../../images/kids6.jpg'
import './Item.css'

const data_kids = [
  {
      id: 1,
      name: 'Liam',
      img: anh1,
      price: 45
  }, {
      id: 2,
      name: 'Noah',
      img: anh2,
      price: 35
  }, {
      id: 3,
      name: 'Oliver',
      img: anh3,
      price: 39
  }, {
      id: 4,
      name: 'Eva',
      img: anh4,
      price: 44
  }, {
      id: 5,
      name: 'Bella',
      img: anh5,
      price: 32
  }, {
      id: 6,
      name: 'William',
      img: anh6,
      price: 45
  }
]

function Item_kids() { 
  return (
    <div className='item'>
      {data_kids.map(kids => 
        <Item_element key={kids.id} data={kids} />
      )}
    </div>
  )
}


export default Item_kids