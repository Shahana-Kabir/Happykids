import { Component, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bio, setBio] = useState('');
    const [posted, setPosted] = useState(false);

    const submit = async (e)=>{
        e.preventDefault();
        const profile = {
            name, email, password, confirmPassword, bio
        }
        const response = await axios.post('http://localhost:8080/profiles/', profile);

        console.log('From server');
        console.log(response.data);
        setPosted(true);
    }

    if(posted){
        return (
            <Redirect to = "/CurrentJobs" />
        )
    }

    return (<>

        <Form>

            <Container>

                <Row>
                    <Col sm="12" md="6">


                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Name" onChange={(e) => setName(e.target.value)} />

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={(e) =>setPassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </Form.Group>


                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Profile Image" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={6} onChange={(e) => setBio(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>


                <Row>

                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" onClick = {submit}>
                            Submit
                           </Button>
                    </Col>

                </Row>
            </Container>
        </Form>
    </>);
}



export default CreateAccount;