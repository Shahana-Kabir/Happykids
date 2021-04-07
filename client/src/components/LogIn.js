import { Component, useState } from 'react';
import './join.scss';
import { Container, Row, Col, Button, Nav, Form, Alert } from 'react-bootstrap'
    ;
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const LogIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [posted, setPosted] = useState(false);
    const [logInFailed, setLogInFailed] = useState(false);

    const [validated, setValidated] = useState(false);


    const submit = async (e)=>{
        const form = e.currentTarget;
        form.checkValidity();
        setValidated(true);

        e.preventDefault();
        const profile = {
            email, password
        }
        try{
            const response = await axios.post('http://localhost:8080/profiles/login', profile);
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('profileId', response.data.profileId);
            sessionStorage.setItem('name', response.data.name);
    
            setPosted(true);
            props.onLogin();
        }
        catch(error){
            setLogInFailed(true);
        }
        
    }

    if(posted){
        return (
            <Redirect to = "/" />
        )
    }


    return (<>
        <Form  noValidate validated={validated} onSubmit={submit}>
            <h1> Log In </h1>
            <Row>
                <Col>
                { logInFailed ? (
                    <Alert variant="danger">
                        Invalid email or password. Try again
                    </Alert>
                ) : '' }
                </Col>
            </Row>
            <Row>
                
                <Col sm="12" md="6">
                <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Valid email is required.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>
             </Col>

            <Col>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Passowrd is required.
                </Form.Control.Feedback>
            </Form.Group>
            </Col>

                </Row>
                
           
            

            <Row>

                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                            Log In
                           </Button>
                    </Col>

                </Row>

        </Form>
    </>);
}

export default LogIn;

