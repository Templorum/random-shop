import React from 'react';
import './App.scss';
import Header from "./modules/Header.jsx";
import Nav from "./modules/Nav.jsx";
import Main from "./modules/Main.jsx";
import Footer from "./modules/Footer.jsx";

const App = () => {
  return (
      <div className='appWrapper'>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;