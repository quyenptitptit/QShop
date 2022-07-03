import React from 'react'
import './Collection.css'
import { Link } from 'react-scroll'
import collection from '../../images/collection.jpg'
import Item_header from '../../components/Item/Item_header/Item_header'
import Item_collection_spring from '../../components/Item/Item_collection_spring'
import Item_collection_summer from '../../components/Item/Item_collection_summer'

function Collections({cart, setCart}) {
  return (
    <div className='collection'>
      <div className='collection-header'>
        <h1>Collection</h1>
        <p>Let's find the right product for you in <span className='span'> QSHOP</span> !</p>
      </div>

      <div className='collection-img'>
        <img className='img-collection' src={collection} alt="collection" />
      </div>

      <Item_header name='Spring Fashion' />
      <Item_collection_spring cart={cart} setCart={setCart} />
      <Item_header name='Summer Fashion' />
      <Item_collection_summer cart={cart} setCart={setCart} />
      
    </div>
  )
}

export default Collections