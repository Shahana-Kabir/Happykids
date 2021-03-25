import { Component } from 'react';
import image from '../assets/images/sib.jpg';
import './hero.scss';

const Hero = () => {
    return ( 
        <img className = "hero"src= {image} alt = "hero image"/>
     );
}
 
export default Hero;