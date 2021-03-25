import { Component } from 'react';
import './header.scss';
import Join from './Join';
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap' ;

class Header extends Component {
    render() {
        return (
            <Navbar className = "justify-content-between" bg="dark" variant="dark">
              <Navbar.Brand href="/">Happy Kids</Navbar.Brand>
              <Join />
              </Navbar>

              )

    }

}

export default Header;