import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import './Footer.css';
import logo from 'C:/Users/SURAKSH/frontend/firstreact1/src/Components/Navbar/issa-logo.png'

class Footer extends Component{
    render(){
        return(
            <footer className='foot'>
                <div className='items'>
                        <ul className='text-center wig d-flex justify-content-center'>
                                <li><a href="https://github.com/ISSA-ICON" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCefzYN_1BquuPPVBQJDmKiQ" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/issa_nie/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                </div>
                <a href="index.html" class="text-center d-flex justify-content-center">
                    <img className='text-center logo1 d-flex justify-content-center' src={logo} width='100%'></img>
                </a>
                <div class="footer-copyright text-center py-3">
                    <a className='contact' href="">Contact Us</a>
                </div>
            </footer>
        )
    }
}
export default Footer;