import React from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/collection-spring1.jpg'
import anh2 from '../../images/collection-spring2.jpg'
import anh3 from '../../images/collection-spring3.jpg'
import anh4 from '../../images/collection-spring4.jpg'
import anh5 from '../../images/collection-spring5.jpg'
import anh6 from '../../images/collection-spring6.jpg'
import './Item.css'

const data_collection_spring = [
  {
      id: 1,
      name: 'Iris',
      img: anh1,
      price: 45
  }, {
      id: 2,
      name: 'Jade',
      img: anh2,
      price: 35
  }, {
      id: 3,
      name: 'Maxwell',
      img: anh3,
      price: 39
  }, {
      id: 4,
      name: 'Pascal',
      img: anh4,
      price: 44
  }, {
      id: 5,
      name: 'Owen',
      img: anh5,
      price: 32
  }, {
      id: 6,
      name: 'Violet',
      img: anh6,
      price: 45
  }
]

function Item_collection_spring() { 
  return (
    <div className='item'>
      {data_collection_spring.map(collection_spring => 
        <Item_element key={collection_spring.id} data={collection_spring} />
      )}
    </div>
  )
}


export default Item_collection_spring