import React, { useState } from 'react'
import HelloHome from '../../components/HelloHome/HelloHome'
import Section from '../../components/Section/Section'
import Feedback from '../../components/Feedback/Feedback'




function Home(props) {
  return (
    <div className='home'>
      <HelloHome />
      <Section />
      <Feedback />
    </div>

  )
}


// const mapStateToProps = state => {
//   return {
//       isLoggedIn: state.user.isLoggedIn
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

export default Home;