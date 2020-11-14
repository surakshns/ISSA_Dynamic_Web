import React, { Component } from 'react';
import Eventslist from '../Components/Eventslist/Eventslist';

class Events extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className='eventspage'>
                <Eventslist />
            </div>
        );
    }
}
export default Events;