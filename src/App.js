import React, {  } from 'react';
import './App.css';
import { Switch, Route,  Routes } from 'react-router-dom';
import HomePage from '../src/pages/hompage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App () {
    return (
        <div>
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route path='/hats' element={<HatsPage/>} />
          </Routes>
        </div>
    );
  }


export default App;
