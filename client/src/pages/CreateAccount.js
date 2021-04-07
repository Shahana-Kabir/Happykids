import { Component, useState } from 'react';
import { Alert, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bio, setBio] = useState('');
    const [posted, setPosted] = useState(false);
    const [validated, setValidated] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [image, setImage] = useState(null);



    const submit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            setValidated(true);
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        }
        else {
            setPasswordError(false);
        }

       

        var formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("bio", bio);

        const response = await axios.post('http://localhost:8080/profiles/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


       // const response = await axios.post('http://localhost:8080/profiles/', profile);

        console.log('From server');
        console.log(response.data);
        setPosted(true);
    }

    if (posted) {
        return (
            <Redirect to="/LogIn" />
        )
    }

    return (<>

        <Form noValidate validated={validated} onSubmit={submit}>
            <h1>Create Account</h1>

            <Container>

                <Row>
                    <Col sm="12" md="6">


                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control required placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Name is required.
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Valid Email is required.
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Password is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Confirm password is required.
                            </Form.Control.Feedback>
                            {passwordError ?
                                <Form.Text className="text-danger">Password and Confirm Password must match</Form.Text>
                                : ''}
                        </Form.Group>


                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.File label="Profile Image" required onChange={(e) => setImage(e.target.files[0])} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" required rows={6} onChange={(e) => setBio(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Bio is required.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>


                <Row>

                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                            Submit
                           </Button>
                    </Col>

                </Row>
            </Container>
        </Form>
    </>);
}



export default CreateAccount;