import React, { Component } from 'react';
import Elists from './Elists';
import './Elists.css'
import Vid from './vid.mp4';

class Eventslist extends Component{



    
    render(){
        return(
            <div>
                <div>
                <h1 className='eventheading'>Events</h1>
                <video id="background-video" loop autoplay>
                <source src={Vid} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                </div>
                <ul>{Elists.map((item, index) => {
                return(
                <li key={index}>
                <div class="card elistcard">
                <img class="card-img elistimg" src={item.image} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title ename">{item.name}</h5>
                <p class="card-text ediscription">{item.description}</p>
                <p class="card-text d-flex justify-content-center"><small class="text-muted">{item.date}</small></p>
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