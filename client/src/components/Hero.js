import './hero.scss';
import { Jumbotron } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const Hero = (props) => {

    const startAt = props.loggedIn ? '/PostAJob' : '/CurrentJobs';

    return (
        //<img className = "hero" src= {image} alt = "hero image"/>
        <Jumbotron className="rounded-0 hero text-white d-flex flex-column justify-content-center">
            <h1>It takes a village to raise a kid...</h1>
            <p>
                Find friendly & trusted babysitters for your kids.
            </p>
            <p>
                <Link className="btn btn-primary" to={startAt}>Start Here</Link>
            </p>
        </Jumbotron>
    );
}

export default Hero;