import { Component } from 'react';
import './header.scss';
import Join from './Join';
import LogOut from './LogOut';

import { Nav, Navbar } from 'react-bootstrap' ;
import {Link} from 'react-router-dom';

const Header = (props) => {
    
        return (
            <Navbar className = "justify-content-between bg-warning">
              <Navbar.Brand href="/" className="text-primary">Happy Kids</Navbar.Brand>
              <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/CurrentJobs">
                            My Jobs
                        </Link>                        
                    </Nav.Link>                                       
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/CurrentJobs">
                            Jobs
                        </Link>                        
                    </Nav.Link>                                       
                </Nav.Item>
                {props.loggedIn ? <LogOut onLogout={props.onLogout} /> : <Join />}
              </Nav>                
                
              </Navbar>
              )

}

export default Header;