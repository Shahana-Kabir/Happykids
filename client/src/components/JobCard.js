
import axios from 'axios';
import {Button, Card } from 'react-bootstrap';
import Profile from '../pages/Profile';


const JobCard = (props) => {
    const confirm = async (e) => {
        // e.preventDefault();
        const request = {
            jobId: props.id,
            token: sessionStorage.getItem('token')
        };

        await axios.post('http://localhost:8080/jobs/confirm', request);
    }

    const apply = async()=>{
        await axios.post('http://localhost:8080/jobs/apply', {
            jobId: props.id,
            token: sessionStorage.getItem('token')
        })
        alert("Applied")
    }

    let button = '';
    if(props.showingMine || props.status === 'confirmed' || props.status === 'applied'){
        button = '';
    }
    else{
        button = props.loggedIn ?  <Button onClick = {apply}>Apply</Button> : "Login to Apply";
    }
    

    return (

        <Card>

            <Card.Body>
                <Card.Title>{props.time}</Card.Title>                
                <Card.Text>
                    Posted By
                    <Profile profileId={props.postedBy} />
                </Card.Text>
                <Card.Text>
                    {props.street}
                </Card.Text>
                <Card.Text>
                    {props.city} {props.province} {props.postalCode}
                </Card.Text>

                <Card.Text>
                    {props.description}
                </Card.Text>

                {props.status === 'applied' ? (
                    <div>
                        Applied By
                        <Profile profileId={props.applicantId} />
                        <Button onClick={confirm}>Confirm</Button>
                    </div>                    
                )
                 : button }

                {props.status === 'confirmed' ? (
                    <div>
                        Selected Sitter
                        <Profile profileId={props.applicantId} />                        
                    </div>                    
                )
                 : '' }

                
            </Card.Body>
        </Card>


    );
}

export default JobCard;