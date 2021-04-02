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
    const [validated, setValidated] = useState(false);

    const submit = async (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        if(!form.checkValidity()){            
            setValidated(true);
            return;
        }

        const token = sessionStorage.getItem('token');
        const job = {
            street, city, province, postalCode, time, description, token
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

        <Form noValidate validated={validated} onSubmit={submit}>
            <h1>Post A Job</h1>
            <Container>
                <Row>
                    <Col>
                <Form.Group>
                    <Form.Label>Street</Form.Label>
                    <Form.Control required placeholder="Street" onChange={(e) => setStreet(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Street is required.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control required placeholder="City" onChange={(e) =>setCity(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        City is required.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Province</Form.Label>
                    <Form.Control required placeholder="Province" onChange={(e) => setProvince(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Province is required.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control required placeholder="Postal Code" onChange={(e) => setPostalCode(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Postal Code is required.
                    </Form.Control.Feedback>
                </Form.Group>

                </Col>

                <Col>
                <Form.Group>
                    <Form.Label>Time & Date</Form.Label>
                    <Form.Control required placeholder="Time & Date" onChange={(e) => setTime(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Time and Date are required.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control required as="textarea" rows={6} onChange={(e) => setDescription(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Description is required.
                    </Form.Control.Feedback>
                </Form.Group>
                </Col>

                </Row>

                <Row>

                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit"  >
                            Submit
                           </Button>
                    </Col>

                </Row>


            </Container>

        </Form>
    </div>);
}

export default PostAJob;