import React, { Component } from 'react';
import classes from './App.css';
import NewGame from './Components/Games/NewGame/newGame'
import Init from './Components/Initialization/init'
import Profile from './Components/Profile/profile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/About/about'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <About/>}/>
                    <Route path="/register" render={(props) => <Init status="register"/>}/>
                    <Route path="/newgame" render={(props) => <NewGame/>}/>
                    <Route path="/profile" render={(props) => <Profile/>}/>
                    <Route path="/login" render={(props) => <Init status="login"/>}/>
                    <Route path="/leader_board" render={(props) => <Init status="login"/>}/>
                </div>
            </Router>
        )
    }
}

export default App
