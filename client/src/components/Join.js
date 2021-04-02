import { Component } from 'react';
import './join.scss';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Join extends Component {
    render() {
        return (
            <>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/CreateAccount">
                            Create Account
                        </Link>                        
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/LogIn">
                            Log In
                        </Link>  
                        
                        </Nav.Link>
                </Nav.Item>

            </>
        );

    }

}

export default Join;