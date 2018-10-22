import React, {Component} from "react";
import Registration from './Registration/registration';
import Login from './Login/login';
import classes from './init.css';

const Init = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hover:""
    //     };
    // };
    //
    // initialState(){
    //     return{
    //         hover: false
    //     }
    // }
    //
    // styleChange(){
    //     const curState = this.state.hover;
    //     this.setState({hover: !curState})
    // }

    // let object = this.refs.login

    return(
        <div className={classes.div}>
            <div>
                <Registration></Registration>
            </div>
            <div className={classes.overlay} >
                <div className={classes.text} ></div>
                <br/>
                <div className={classes.topper}>
                    <Login className={classes.temp}></Login>
                </div>
            </div>
        </div>
    );
}

export default Init;