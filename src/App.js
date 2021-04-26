import react from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/contact' component={Contact}/>
        <Route path='/services' component={Services}/>
        <Route path='/about' component={About}/>
        <Redirect to='/'/>
      </Switch>
    </>
  );
}

export default App;
