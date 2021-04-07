import { Component } from 'react';
import './header.scss';
import Join from './Join';
import LogOut from './LogOut';

import { Nav, Navbar } from 'react-bootstrap' ;
import {Link} from 'react-router-dom';

const Header = (props) => {
    
        return (
            <Navbar className = "justify-content-between bg-warning">
              <Navbar.Brand href="/" className="text-primary">HappyKids</Navbar.Brand>
              <Nav variant="pills" defaultActiveKey="/">
              { props.loggedIn ?
                (
                    <>
                <Nav.Item className = "ml-2">
                    <Link to= "/PostAJob">
                            Post A Job           
                    </Link>                                       
                </Nav.Item>
                <Nav.Item className = "ml-2">
                    
                        <Link to="/MyJobs">
                            My Jobs
                        </Link>                        
                                                         
                </Nav.Item>
                </>) : ''                  
              }
               <Nav.Item className = "ml-2">
                    
                        <Link to="/CurrentJobs">
                            Jobs
                        </Link>                        
                                                         
                </Nav.Item>

                {props.userName? 
                <Nav.Item className = "ml-2">
                   
                        {props.userName}
                                                
                                                         
                </Nav.Item>
                : ''}
                {props.loggedIn ? <LogOut onLogout={props.onLogout} /> : <Join />}
              </Nav>                
                
              </Navbar>
              )

}

export default Header;