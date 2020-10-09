import React, { Component } from 'react';
import  Menuitem from './Menuitems.js';
import './Navbar.css';


class Navbar extends Component{
state={ clicked: false}

clickedeventHandler = () => {
    this.setState({clicked: !this.state.clicked});
}

    render(){
    return (
    <nav className='navbar'>
        <div>
        <img className={this.state.clicked ? 'rot' : 'logo'} src='./issa-logo.png' width='100%'></img>
        <h1 className='title'>ISSA</h1>
        </div>
        <div className='menu-icon' onClick={this.clickedeventHandler}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div>
            <ul className={this.state.clicked ? 'list active' : 'list'}>{Menuitem.map((item, index) => {
                return(
                <li key={index}>
                    <a className={item.cname} href={item.link}>{item.name}</a>
                </li>
                    )
                }
            )}
            </ul>
            </div>
        </nav>
            
    )
        }
    };


export default Navbar;