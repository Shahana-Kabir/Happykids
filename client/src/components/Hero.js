import image from '../assets/images/sib.jpg';
import './hero.scss';
import { Jumbotron } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const Hero = () => {
    return (
        //<img className = "hero" src= {image} alt = "hero image"/>
        <Jumbotron className="hero mt-4 text-white">
            <h1>It takes a village to raise a kid...</h1>
            <p>
                Find friendly babysitters for your kids.
            </p>
            <p>
                <Link className="btn btn-primary" to='/PostAJob'>Start Here</Link>
            </p>
        </Jumbotron>
    );
}

export default Hero;