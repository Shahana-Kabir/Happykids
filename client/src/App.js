import logo from './logo.svg';
import './App.scss';
import Join from './components/Join';
import { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AvailableJobs from './components/AvavilableJobs';
import Footer from './components/Footer';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import {Container} from 'react-bootstrap';



function App() {
  return (<Container>

    <BrowserRouter>
    
    <Header />
    <Switch>
      <Route path = '/' exact component = {Home} />
        
      <Route path = '/CreateAccount'  component = {CreateAccount} />
        
      </Switch>
    
    <Footer />
    </BrowserRouter>

   </Container>
    
  );
}

export default App;
