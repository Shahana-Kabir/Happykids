import { Component, useState } from 'react';
import './join.scss';
import { Container, Row, Col, Button, Nav, Form } from 'react-bootstrap'
    ;
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const LogIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [posted, setPosted] = useState(false);

    const submit = async (e)=>{
        e.preventDefault();
        const profile = {
            email, password
        }
        const response = await axios.post('http://localhost:8080/profiles/login', profile);
        sessionStorage.setItem('token', response.data.token);

        setPosted(true);
        props.onLogin();
    }

    if(posted){
        return (
            <Redirect to = "/" />
        )
    }


    return (<>
        <Form>
            <Row>
                
                <Col sm="12" md="6">
                <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>
             </Col>

            <Col>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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

        </Form>
    </>);
}

export default LogIn;

