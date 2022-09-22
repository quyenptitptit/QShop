import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { checkLoginRecoil } from './recoil/checkLogin';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LogIn from './components/Authen/Login/Login';
import SignIn from './components/Authen/Signin/Signin';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';
import Collections from './pages/Collections/Collections';
import Introduction from './pages/Introduction/Introduction';
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Search from './components/Search/Search';
import Checkout from './components/Checkout/Checkout';


function App() {

  const [conditionLogIn, setConditionLogIn] = useState(false)
  const [conditionSignIn, setConditionSignIn] = useState(false)

  const [data, setData] = useState(JSON.parse(localStorage.getItem('user') || '[]'))
  const [cart, setCart] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  const checkLogin = useRecoilValue(checkLoginRecoil)
  localStorage.setItem('checkLogin', checkLogin)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Header cart={cart} setCart={setCart} filteredData={filteredData} setFilteredData={setFilteredData} setConditionSignIn={setConditionSignIn} />}>
          {/* <Route path='/sign-in' element={<SignIn setConditionSignIn={setConditionSignIn} setConditionLogIn={setConditionLogIn} />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products cart={cart} setCart={setCart} />} />
          <Route path='/men' element={<Men cart={cart} setCart={setCart} />} />
          <Route path='/women' element={<Women cart={cart} setCart={setCart} />} />
          <Route path='/kids' element={<Kids cart={cart} setCart={setCart} />} />
          <Route path='/collections' element={<Collections cart={cart} setCart={setCart} />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/search' element={<Search filteredData={filteredData} cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} setCart={setCart} />} />
        </Route>
      </Routes>
      {conditionLogIn && <LogIn setConditionSignIn={setConditionSignIn} setConditionLogIn={setConditionLogIn} />}
      {conditionSignIn && <SignIn setConditionLogIn={setConditionLogIn} setConditionSignIn={setConditionSignIn} data={data} setData={setData} />}
      <Footer />
    </div>
  )
}


export default App;
