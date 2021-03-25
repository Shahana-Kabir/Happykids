import { Component } from 'react';
import './AvailableJobs.scss';
class AvailableJobs extends Component {
    render(){
        return ( <div>
            <div className = "availableJobs">
            <div className = "availableJobs__right">
            <h2 className = "availableJobs__right__title">AvailableJobs</h2>
            <p className = "availableJobs__right__title">Job 1</p>
            <p className = "availableJobs__right__title">Job 2</p>
            </div>
            <div className = "availableJobs__left">
            
            <p className = "availableJobs__left__title">Job 3</p>
            <p className = "availableJobs__left__title">Job 4</p>
            </div>
            </div>
           </div> );

    }
   
}
 
export default AvailableJobs;