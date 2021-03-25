import { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

class CreateAccount extends Component {
    render() {

        return (<>

            <Form>

                <Container>

                    <Row>
                        <Col sm="12" md="6">


                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Name" />

                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                    </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>


                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Profile Image" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={6} />
                            </Form.Group>
                        </Col>
                    </Row>


                    <Row>

                        <Col className = "d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                Submit
                           </Button>
                        </Col>

                    </Row>
                </Container>
            </Form>
        </>);
    }

}

export default CreateAccount;