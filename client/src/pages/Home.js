import { Component } from 'react';
import Hero from '../components/Hero';
import AvailableJobs from '../components/AvavilableJobs';

const Home = (props) => {

    return (<>
        <Hero loggedIn={props.loggedIn} />
        <AvailableJobs />
    </>);

}

export default Home;