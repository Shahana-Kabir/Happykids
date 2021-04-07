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
import MyJobs from './pages/MyJobs';
import Profile from './pages/Profile';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const onLogIn = ()=> {
    setUserName(sessionStorage.getItem('name'));
    setLoggedIn(true);
  }

  const onLogout = ()=> {
    setUserName(null);
    setLoggedIn(false);
  }


  return (<Container>

    <BrowserRouter>
    
    <Header loggedIn={loggedIn} userName = {userName} onLogout={onLogout} />
    <Switch>
      <Route path = '/' exact component = {() => <Home loggedIn={loggedIn} />} />
        
      <Route path = '/CreateAccount'  component = {CreateAccount} />
      <Route path = '/LogIn'  component = {() => <LogIn onLogin={onLogIn} />} />
      <Route path = '/PostAJob'  component = {PostAJob} />
      <Route path = '/MyJobs'  component = {() => <MyJobs loggedIn={loggedIn}  />} />

      <Route path = '/CurrentJobs'  component = {() => <CurrentJobs loggedIn={loggedIn}  />} />
      <Route path = '/profiles/:profileId'  component = { Profile } />      
        
      </Switch>
    
    <Footer />
    </BrowserRouter>

   </Container>
    
  );
}

export default App;
