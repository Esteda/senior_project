import React, { Component } from 'react';
import classes from './about.css'
import {NUlibraryUser} from "../../config";
import gif from '../../FinalVersion.v2.0.gif'
import { Link } from 'react-router-dom'

class About extends Component{
    constructor(props) {
        super(props);
        if(localStorage.getItem(NUlibraryUser)) {
            this.state = {isLoggedIn: true}
        }
        else {
            this.state = {isLoggedIn: false}
        }
    };

    logOut = () =>{
        localStorage.removeItem(NUlibraryUser)
    }

    render() {
        var menuItems = null;
        if (this.state.isLoggedIn === true) {
            menuItems = <div className={classes.menu}>
                <Link to='/newGame' className={classes.list}>Start new game</Link>
                <br/>
                <Link to='/profile' className={classes.list}>Profile</Link>
                <br/>
                <Link to='/register' className={classes.list}>Leader Board</Link>
                <br/>
                <p onClick={this.logOut.bind(this)} className={classes.list}>Log out</p>
            </div>
        }
        else {
            menuItems = <div className={classes.menu}>
                <Link to='/register' className={classes.list}>New Profile</Link>
                <br/>
                <Link to='/login' className={classes.list}>Log in</Link>
            </div>
        }
        return(
            <div>
                {menuItems}
                <div className={classes.myGifDiv}><img className={classes.myGif} src={gif}/></div>
            </div>
        )
    }
}

export default About