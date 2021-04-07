import { Component } from 'react';
import './join.scss';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Join extends Component {
    render() {
        return (
            <>
                <Nav.Item className = "ml-2">
                   
                        <Link to="/CreateAccount">
                            Create Account
                        </Link>                        
                   
                </Nav.Item>
                <Nav.Item className = "ml-2">
                   
                    <Link to="/LogIn">
                            Log In
                        </Link>  
                        
                       
                </Nav.Item>

            </>
        );

    }

}

export default Join;