import React, { Component } from 'react';
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Timer from "../Components/Timer/Timer";
import Team from "../Components/Team/Team";
import Navigation from "../Components/Navigation/Navigation";

class Home extends Component{
    state = {
        timer: [3, 16, 36],
      };
      componentDidMount() {
        window.scrollTo(0, 0);
    }
      render(){
          return(
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
          );
      }
}
export default Home;