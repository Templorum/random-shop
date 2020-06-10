import React from 'react';
import './App.scss';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

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