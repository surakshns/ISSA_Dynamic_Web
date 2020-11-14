import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main from "./Main";


class App extends Component{

  render(){
  return (
    <div>
      <Navbar />
        <Main />
      <Footer />
    </div>
  );
}
}

export default App;
