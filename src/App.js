import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Timer from "./Components/Timer/Timer";
import Team from "./Components/Team/Team";
import Navigation from "./Components/Navigation/Navigation";


class App extends Component{
  state = {
    timer: [3, 16, 36],
  };

  render(){
  return (
    <div>
      <Navbar />
      <div className='homepage'>
        <Navigation />
        <main>
          <Header />
          <About />
          <Timer
            value_days={this.state.timer[0]}
            value_hours={this.state.timer[1]}
            value_minutes={this.state.timer[2]}
          />
          <Team />
        </main>
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
