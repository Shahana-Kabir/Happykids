import { Component } from 'react';
import './join.scss';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
    ;
import { Link } from 'react-router-dom';
class Join extends Component {
    render() {
        return (
            <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/CreateAccount">
                            Create Account
                        </Link>                        
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Log In</Nav.Link>
                </Nav.Item>

            </Nav>
        );

    }

}

export default Join;