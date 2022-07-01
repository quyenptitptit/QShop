import React from 'react'
import './Dropdown.css'
import { Link, Outlet } from 'react-router-dom'

export default function Dropdown(props) {
  return (
    <>
      <div class="dropdown">
        <Link to={props.data.path}><button class="dropbtn">{props.data.label}</button></Link>
        
        <div class="dropdown-content">
          {props.data.children.length > 0 ? <div className='content'>{props.data.children.map(e => <Link to={e.path}>{e.title}</Link>)}</div> : null}
          
        </div>
        
      </div>
      
    </>
  )
}
