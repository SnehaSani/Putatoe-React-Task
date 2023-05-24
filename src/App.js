import React from 'react';
import './App.css';
import Header from './components/Header';
import Recharge from './components/Recharge';
import Services from './components/Services';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app-body'>
        <Recharge/>
        <Services/>
        <Category/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
