import axios from "axios";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogOut = (props) => {

    const onClick = async () => {
        await axios.post('http://localhost:8080/profiles/logout', { token: sessionStorage.getItem('token') });
        sessionStorage.removeItem('token');
        props.onLogout();
    }
    return (

        <Nav.Item className = "ml-2">
            
                <Link onClick={onClick}>
                    Logout
                        </Link>
           
        </Nav.Item>
    );
}

export default LogOut;