import React, {  } from 'react';
import './App.css';
import { Switch, Route,  Routes } from 'react-router-dom';
import HomePage from '../src/pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App () {
    return (
        <div>
          <Header/>
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route path='/shop' element={<ShopPage/>} />
          </Routes>
        </div>
    );
  }


export default App;
