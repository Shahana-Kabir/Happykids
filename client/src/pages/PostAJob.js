import { Component, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const PostAJob = () => {

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [posted, setPosted] = useState(false);

    const submit = async (e)=>{
        e.preventDefault();
        const job = {
            street, city, province, postalCode, time, description
        }
        const response = await axios.post('http://localhost:8080/jobs/', job);

        console.log('From server');
        console.log(response.data);
        setPosted(true);
    }

    if(posted){
        return (
            <Redirect to = "/CurrentJobs" />
        )
    }

    return (<div>

        <Form>
            <Container>
                <Row>
                    <Col>
                <Form.Group>
                    <Form.Label>Street</Form.Label>
                    <Form.Control placeholder="Street" onChange={(e) => setStreet(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="City" onChange={(e) =>setCity(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Province</Form.Label>
                    <Form.Control placeholder="Province" onChange={(e) => setProvince(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control placeholder="Postal Code" onChange={(e) => setPostalCode(e.target.value)}/>
                </Form.Group>

                </Col>

                <Col>
                <Form.Group>
                    <Form.Label>Time & Date</Form.Label>
                    <Form.Control placeholder="Time & Date" onChange={(e) => setTime(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={6} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                </Col>

                </Row>

                <Row>

                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" onClick={submit} >
                            Submit
                           </Button>
                    </Col>

                </Row>


            </Container>

        </Form>
    </div>);
}

export default PostAJob;