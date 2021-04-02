
import axios from 'axios';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';


const JobCard = (props) => {
    const apply = async()=>{
        await axios.post('http://localhost:8080/jobs/apply', {
            jobId: props.id,
            token: sessionStorage.getItem('token')
        })
        alert("Applied")
    }

    const button = props.loggedIn ?  <Button onClick = {apply}>Apply</Button> : "Login to Apply";

    return (

        <Card>

            <Card.Body>
                <Card.Title>{props.time}</Card.Title>
                <Card.Text>
                    {props.street}
                </Card.Text>
                <Card.Text>
                    {props.city} {props.province} {props.postalCode}
                </Card.Text>


                <Card.Text>
                    {props.description}
                </Card.Text>

                {props.status === 'applied' ? 'Waiting for response' : button }

                
            </Card.Body>
        </Card>


    );
}

export default JobCard;