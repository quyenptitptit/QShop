import React from 'react'
import './Item_header.css'

function Item_header(props) {
    return (
        <div className='item_header'>
            <div>
                <h2 class="item_header-text-header">{props.name}</h2>
            </div>
        </div>
    )
}

export default Item_header