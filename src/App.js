import React, { Component } from 'react';
import classes from './App.css';
import NewGame from './Components/Games/NewGame/newGame'
import gif from './FinalVersion.v2.0.gif'
import Init from './Components/Initialization/init'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            message: "login",
            curState: ""
        };
    };

    changeStatus = (e) => {
        e.preventDefault()
        const curState = this.state.isLoggedIn;
        if(!this.state.isLoggedIn){
            this.setState({message: "logout"})
        }
        else{
            this.setState({message:"login"})
        }
        this.setState({isLoggedIn: !curState})
    };

    newProf = (e) =>{
        e.preventDefault()
        this.setState({curState: "newProfile"})
    }

    logIn =  (e) =>{
        e.preventDefault()
        this.setState({curState: "loginPage"})
    }

    newGame = (e) =>{
        e.preventDefault()
        this.setState({curState: "newGame"})
    }

    cancelation = (e) =>{
        e.preventDefault()
        this.setState({curState: ""})
    }

    render() {
        var menuItems = null;
        if (this.state.isLoggedIn === true) {
            menuItems = <div className={classes.menu}>
                <p onClick={this.newGame.bind(this)}>Start new game</p>
                <p>Profile</p>
                <p> Leader board</p>
            </div>
        }
        else {
            menuItems = <div className={classes.menu}>
                <p onClick={this.newProf.bind(this)}>New Profile</p>
                <p onClick={this.logIn.bind(this)}>Log in</p>
            </div>
        }
        switch (this.state.curState) {
            case "":
                return (
                    <div>
                        <button className="button" onClick={this.changeStatus.bind(this)}>{this.state.message}</button>
                        {menuItems}
                        <div className={classes.myGifDiv}><img className={classes.myGif} src={gif}/></div>
                    </div>
                )
            case "newProfile":
                return (
                    <div>
                        <Init/>
                    </div>
                )
            case "newGame":
                return (
                    <div>
                        <NewGame></NewGame>
                    </div>
                )
        }
    }
}

export default App;
