import React from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/collection-summer1.jpg'
import anh2 from '../../images/collection-summer2.jpg'
import anh3 from '../../images/collection-summer3.jpg'
import anh4 from '../../images/collection-summer4.jpg'
import anh5 from '../../images/collection-summer5.jpg'
import anh6 from '../../images/collection-summer6.jpg'
import './Item.css'

const data_collection_summer = [
  {
      id: 1,
      name: 'April',
      img: anh1,
      price: 45
  }, {
      id: 2,
      name: 'Aurora',
      img: anh2,
      price: 35
  }, {
      id: 3,
      name: 'Claire',
      img: anh3,
      price: 39
  }, {
      id: 4,
      name: 'Daisy',
      img: anh4,
      price: 44
  }, {
      id: 5,
      name: 'Florence',
      img: anh5,
      price: 32
  }, {
      id: 6,
      name: 'Freya',
      img: anh6,
      price: 45
  }
]

function Item_collection_summer() { 
  return (
    <div className='item'>
      {data_collection_summer.map(collection_summer => 
        <Item_element key={collection_summer.id} data={collection_summer} />
      )}
    </div>
  )
}


export default Item_collection_summer