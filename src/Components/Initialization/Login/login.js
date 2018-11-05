import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import classes from './login.css'
import axios from 'axios'
import {NUlibraryUser} from "../../../config";
import {  Redirect } from 'react-router'
import {
    withRouter
} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading:false,
            email: "test@mail.ru",
            password: "1"
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    redirect = () => <Redirect to = '/'/>

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("clicked")
        var dataForm = {
            "email": this.state.email,
            "password": this.state.password
        }
        axios({
            method: "post",
            url: '/user/login',
            data: dataForm
        }).then(res=>{
            localStorage.setItem(NUlibraryUser,res.data);
            var x  = localStorage.getItem(NUlibraryUser);
            if(x){
                this.props.history.push('/')
            }
        })


    }

    renderForm() {
        return (
            <form className={classes.Signin} onSubmit={this.handleSubmit.bind(this)}>
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
                <input type="submit" className={classes.button} value="Login"/>
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