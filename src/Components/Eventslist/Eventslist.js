import React, { Component } from 'react';
import Elists from './Elists';
import Elistnextevents from './Elistnextevents';
import './Elists.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Next } from 'react-bootstrap/esm/PageItem';
import Cards from "./Cards";
// import Vid from './vid.mp4';

class Eventslist extends Component{

    render(){
        return(
            <div className="eventpagebackgimg">
                <div> 
                {/* <video id="background-video" loop autoplay>
                <source src={Vid} type="video/mp4" />
                Your browser does not support the video tag.
                </video> */}
                </div>

                <ul className="fulllist"><div className="heading-upcoming heading-secondary">Upcoming Event</div>
                {Elistnextevents.map((item, index) => {
                    return(
                        <Cards image={item.image} name={item.name} description={item.description} date={item.date} >
                            <a className="buttonforevent">Register&nbsp;Now<i className="fa fa-pen-square" aria-hidden="true"></i></a>
                        </Cards>
                
                    )
                })}
                <div className="heading-upcoming heading-secondary ">Our Events</div>
                {Elists.map(( item ) => {
                    return(
                    <Cards image={item.image} name={item.name} description={item.description} date={item.date} >
                        <div className="iconcontainer">
                            <a href={item.youtube}><i className="fa icons fa-youtube-play" aria-hidden="true"></i></a>
                            <a href={item.instagram}><i className="fa icons fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </Cards>
                    )
                })}
                </ul>
            </div>
        )
    }
};

export default Eventslist;