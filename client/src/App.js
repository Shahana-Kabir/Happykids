import logo from './logo.svg';
import './App.scss';
import Join from './components/Join';
import { Component, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AvailableJobs from './components/AvavilableJobs';
import Footer from './components/Footer';
import CreateAccount from './pages/CreateAccount';
import LogIn from './components/LogIn';
import Home from './pages/Home';
import {Container} from 'react-bootstrap';
import PostAJob from './pages/PostAJob';
import CurrentJobs from './pages/CurrentJobs';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (<Container>

    <BrowserRouter>
    
    <Header loggedIn={loggedIn} onLogout={() => setLoggedIn(false)} />
    <Switch>
      <Route path = '/' exact component = {Home} />
        
      <Route path = '/CreateAccount'  component = {CreateAccount} />
      <Route path = '/LogIn'  component = {() => <LogIn onLogin={() => setLoggedIn(true)} />} />
      <Route path = '/PostAJob'  component = {PostAJob} />
      <Route path = '/CurrentJobs'  component = {() => <CurrentJobs loggedIn={loggedIn}  />} />

      
      
        
      </Switch>
    
    <Footer />
    </BrowserRouter>

   </Container>
    
  );
}

export default App;
