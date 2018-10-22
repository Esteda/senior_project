import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import classes from './login.css'

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading:false,
            email: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    renderForm() {
        return (
            <form className={classes.Signin}>
                <FormGroup controlId="email" bsSize="large" className={classes.label}>
                    <ControlLabel>Email</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Enter email"
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large" className={classes.label}>
                    <ControlLabel>Password</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <button className={classes.button}>Cancel</button>
                <button className={classes.button}>LogIn</button>
            </form>
        );
    }

    render(){
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default Login