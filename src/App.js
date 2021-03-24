import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css'; 
import { NOTFOUND } from 'dns';

const App =()=> {

  //to keep the initial users on the home page
  // async componentDidMount(){ 
  //   this.setState({loading: true})

  //   const res = await axios.get(`https://api.github.com/users?client_id=${
  //     process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=&{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({ users: res.data,loading: false }) 
  // }

  return (
    <GithubState>
      <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className= "container">
          
          <Alert />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/about' component={About} />
            <Route exaxt path = '/user/:login' component={User}/>
            <Route component={NotFound}/>
          </Switch>
        
        </div>
      </div> 
      </Router>
      </AlertState>
    </GithubState>
  );
  }

export default App;
