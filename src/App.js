import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


class App extends Component{
  render(){
  return (
    <div>
      <Navbar />
      <div className='text-center App-header'>
        Home-yash,vidyashree<br />
        Events-Sambhav,pooja,Raghu<br />
        Projects-Rahul,Shivam,udkarsh,Sambhav<br />
        Suggestion-Box-Shivam,Mohith<br />
        Registeration-Mohith,Shivam(not requried now)<br/>
        <div>
          <br></br>
          Home-Do it with reference to static website<br />
          Event-has 2 catagories event of issa and globle events on present ongoing events and other coding events(also include a segment for tech news)<br />
          Projects-contains a photo of the project discription of it and languages,frameworks used in it<br />
          Suggestion-You guys discuss and decide<br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
