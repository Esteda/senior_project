import React, {Component} from 'react'
import NavbarProfile from './navbar'
import classes from './profile.css'
import avatar from './avatar.jpg'

class Profile extends Component{
    render() {
        return(
            <div className={classes.main}>
                <NavbarProfile/>
                <div className={classes.bot}>
                    <div className={classes.avatar}><img className={classes.image} src={avatar}/></div>
                    <div className={classes.info}></div>
                </div>
            </div>
        )
    }
}

export default Profile;