
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import Profile from '../pages/Profile';


const JobCard = (props) => {
    const confirm = async (e) => {
        // e.preventDefault();
        const request = {
            jobId: props.id,
            token: sessionStorage.getItem('token')
        };

        await axios.post('http://localhost:8080/jobs/confirm', request);
        props.onChange();
    }

    const reject = async (e) => {
        // e.preventDefault();
        const request = {
            jobId: props.id,
            token: sessionStorage.getItem('token')
        };

        await axios.post('http://localhost:8080/jobs/reject', request);
        props.onChange();
    }

    const apply = async () => {
        await axios.post('http://localhost:8080/jobs/apply', {
            jobId: props.id,
            token: sessionStorage.getItem('token')
        })
        props.onChange();
    }



    let button = '';
    const isPostedByMe = sessionStorage.getItem('profileId') === props.postedBy;
    if (isPostedByMe || props.status === 'confirmed' || props.status === 'applied') {
        button = '';
    }
    else {
        button = props.loggedIn ? <Button onClick={apply}>Apply</Button> : "Login to Apply";
    }

    let confirmButton = '';
    if (isPostedByMe) {
        confirmButton = <>
            <Button onClick={confirm} className = "mr-4">Confirm</Button>
            <Button variant= "secondary" onClick={reject}>Reject</Button>
        </>
    }



    return (

        <div className="border p-4">
            <Row>
                <Col sm="12" md = "6"><i className="bi-calendar-check mr-2"></i> {props.time}</Col>
                <Col sm="12" md = "6" className=  "text-md-right ">
                    <i className="bi-map-fill mr-2"></i>
                    {props.street} <br></br>
                    {props.city} <br></br>
                    {props.province} {props.postalCode} <br></br>
                </Col>
            </Row>    
            <Row>
                <Col>
                    {props.description}
                </Col>
            </Row>                    

            <Row>
                <Col sm = "12" md = "6">
                    <Profile title="Posted By" profileId={props.postedBy} />
                </Col>
                <Col>
                    {props.status === 'applied' ? (
                        <div>                            
                            <Profile title="Applied By" profileId={props.applicantId} />
                        </div>
                    )
                        : ''}

                    {props.status === 'confirmed' ? (
                        <div>
                            <Profile title="Confirmed Sitter" profileId={props.applicantId} />
                        </div>
                    )
                        : ''}
                </Col>
            </Row>

            <Row>
                <Col className="text-center mt-4">
                    {props.status === 'applied' ? confirmButton : button }
                </Col>
            </Row>




        </div>

    );
}

export default JobCard;