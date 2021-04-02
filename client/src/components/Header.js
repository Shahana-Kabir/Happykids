import { Component } from 'react';
import './header.scss';
import Join from './Join';
import LogOut from './LogOut';

import { Nav, Navbar } from 'react-bootstrap' ;
import {Link} from 'react-router-dom';

const Header = (props) => {
    
        return (
            <Navbar className = "justify-content-between bg-warning mb-4">
              <Navbar.Brand href="/" className="text-primary">HappyKids</Navbar.Brand>
              <Nav variant="pills" defaultActiveKey="/">
              { props.loggedIn ?
                (
                    <>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/PostAJob">
                            Post A Job
                        </Link>                        
                    </Nav.Link>                                       
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/MyJobs">
                            My Jobs
                        </Link>                        
                    </Nav.Link>                                       
                </Nav.Item>
                </>) : ''                  
              }
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