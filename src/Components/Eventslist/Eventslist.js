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
                <li>
                <div className="onecard">
                <div class="card elistcard col-12">
                <img class="card-img elistimg" src={item.image} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title ename">{item.name}</h5>
                <p class="card-text ediscription">{item.description}</p>
                <a className="buttonforevent">Register&nbsp;Now<i className="fa fa-pen-square" aria-hidden="true"></i></a>
                </div>
                </div>
                </div>
                </li>
                    )
    })}
                <div className="heading-upcoming heading-secondary ">Our Events</div>
                {Elists.map(( item ) => {
                return(
                <ScrollAnimation animateIn="moveInLeft" duration="1s" animateOut="moveInLeft" >
                <Cards image={item.image} name={item.name} description={item.description} date={item.date} />
                </ScrollAnimation>
                    )
                }
            )}
            </ul>
            </div>
        )
    }
};

export default Eventslist;