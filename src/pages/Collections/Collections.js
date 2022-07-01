import React from 'react'
import './Collection.css'
import { Link } from 'react-scroll'
import collection from '../../images/collection.jpg'
import Item_header from '../../components/Item/Item_header/Item_header'
import Item_collection_spring from '../../components/Item/Item_collection_spring'
import Item_collection_summer from '../../components/Item/Item_collection_summer'

function Collections() {
  return (
    <div className='collection'>
      <div className='collection-header'>
        <h1>Collection</h1>
        <p>Let's find the right product for you in <span className='span'> QSHOP</span> !</p>
      </div>

      <div className='collection-img'>
        <img src={collection} alt="collection" />
      </div>

      <Item_header name='Spring Fashion' />
      <Item_collection_spring />
      <Item_header name='Summer Fashion' />
      <Item_collection_summer />
      
    </div>
  )
}

export default Collections