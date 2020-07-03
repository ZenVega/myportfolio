import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/home.css'

import profileimage from '../img/homeimg.png'

class Home extends Component{
    render(){    
        return (
                <div className="main-container">
                    <div className="main-content">
                        <section className="home section">
                            <div className="container">
                                <div className= "intro">
                                    <img src={profileimage} alt="Profile Img" className="shadow-img" />
                                    <h1>Stephin T Reji</h1>
                                    <p>I'm a Customer Sucess Manager with a little knowledge about Front End Development</p>
                                    <div className="social-links">
                                        <a href="https://github.com/stephin007" target="_blank" rel = "noopener noreferrer"><i class= "fa fa-github"></i></a>
                                        <a href="https://twitter.com/reji_stephin" target="_blank" rel = "noopener noreferrer"><i class= "fa fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/stephin.reji1998" target="_blank" rel = "noopener noreferrer"><i class= "fa fa-facebook"></i></a>
                                        <a href="https://www.instagram.com/the_spectacled_one/?hl=en"><i class= "fa fa-instagram" target="_blank" rel = "noopener noreferrer"></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )
        }    
}

export default Home