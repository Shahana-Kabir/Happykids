import { Component } from 'react';
import Hero from '../components/Hero';
import AvailableJobs from '../components/AvavilableJobs';

class Home extends Component {
    render(){
     
        return ( <>
        <Hero />
       <AvailableJobs />
        </> );
    }
    
}
 
export default Home;