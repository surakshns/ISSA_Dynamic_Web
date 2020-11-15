import React, { Component } from 'react';
import Elists from './Elists';
import Elistnextevents from './Elistnextevents';
import './Elists.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Next } from 'react-bootstrap/esm/PageItem';
// import Vid from './vid.mp4';

class Eventslist extends Component{

    render(){
        return(
            <div>
                <div> 
                <h1 className='heading-secondary'>Events</h1>
                {/* <video id="background-video" loop autoplay>
                <source src={Vid} type="video/mp4" />
                Your browser does not support the video tag.
                </video> */}
                </div>

                <ul className="fulllist"><div className="heading-upcoming heading-secondary ">Upcoming Event</div>
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
                {Elists.map((item, index) => {
                return(
                <li key={index}>
                <div className="onecard">
                <div class="card elistcard col-12">
                <img class="card-img elistimg" src={item.image} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title ename">{item.name}</h5>
                <p class="card-text ediscription">{item.description}</p>
                <i className="fa icons fa-youtube-play" aria-hidden="true"></i>
                <i className="fa icons fa-instagram" aria-hidden="true"></i>
                <p class="card-text d-flex justify-content-center"><small class="text-muted">{item.date}</small></p>
                </div>
                </div>
                </div>
              </li>
                    )
                }
            )}
            </ul>
            </div>
        )
    }
};

export default Eventslist;