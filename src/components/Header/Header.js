import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { GrCart } from "@react-icons/all-files/gr/GrCart";
import { BsPersonFill } from "@react-icons/all-files/bs/BsPersonFill";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut"
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../../store/actions'



function Header(props) {

  
  
  // const handleClickSignin = () => {
  //   props.setConditionSignIn(true)
  // }

  

  const getCartTotal = () => {
    return props.cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  const handleClickLogOut = () => {
    localStorage.removeItem('user_login')
    history('/')
  }

  const history = useNavigate()

  return (
    <>
      <div className='header'>

        <div className='logo'>
          <Link to="/home" className='logo-link'>QSHOP<i class='fab fa-typo3' /></Link>
        </div>

        <div className='authen'>
          {/* <button onClick={handleClickSignin}>Sign In<BsPersonFill /></button> */}
          <Link to='/cart'><button className='cart' ><GrCart className='cart' />({getCartTotal()})</button></Link>
          <button onClick={handleClickLogOut} className='logout'><BiLogOut /> </button>
        </div>

      </div>
      <Navbar filteredData={props.filteredData} setFilteredData={props.setFilteredData} />
      <Outlet />
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//       isLoggedIn: state.user.isLoggedIn
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       processLogout: () => dispatch(actions.processLogout()),
//   };
// };

export default Header;