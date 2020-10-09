import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


class App extends Component{
  render(){
  return (
    <div>
      <Navbar />
      <div className='text-center'>
        <h1>Home-yash,vidyashree</h1>
        <h1>Events-Sambhav,pooja,Raghu</h1>
        <h1>Projects-Rahul,Shivam,udkarsh,Sambhav</h1>
        <h1>Suggestion-Box-Shivam,Mohith</h1>
        <h1>Registeration-Mohith,Shivam(not requried now)</h1>
        <div>
          <br></br>
          <h2>Home-Do it with reference to static website</h2>
          <h2>Event-has 2 catagories event of issa and globle events on present ongoing events and other coding events(also include a segment for tech news)</h2>
          <h2>Projects-contains a photo of the project discription of it and languages,frameworks used in it</h2>
          <h2>Suggestion-You guys discuss and decide</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
