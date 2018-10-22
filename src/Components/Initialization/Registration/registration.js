import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
// import LoaderButton from "../components/LoaderButton";
import classes from "./registration.css";
import Login from "../Login/login";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
            firstName: "",
            secondName: "",
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            newUser: null,
            id: ""
        };
    }

    validateForm() {
        return (
            this.state.username.length > 0 &&
            this.state.firstName.length > 0 &&
            this.state.secondName.length > 0 &&
            this.state.id.length > 0 &&
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // handleSubmit = async event => {
    //     event.preventDefault();
    //
    //     this.setState({ isLoading: true }, {newUser: "test"});
    //
    //     this.setState({ isLoading: false });
    // }

    renderForm() {
        return (
            <form className={classes.Signup}>
                <FormGroup controlId="username" bsSize="large" className={classes.label}>
                    <ControlLabel>Username</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Username"
                        autoFocus
                        type="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="firstName" bsSize="large" className={classes.label}>
                    <ControlLabel>First name</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="First Name"
                        type="username"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="secondName" bsSize="large" className={classes.label}>
                    <ControlLabel>Second Name</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Second Name"
                        type="secondName"
                        value={this.state.secondName}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="id" bsSize="large" className={classes.label}>
                    <ControlLabel>ID</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Personal ID"
                        type="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large" className={classes.label}>
                    <ControlLabel>Email</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Email Address"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large" className={classes.label}>
                    <ControlLabel>Password</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large" className={classes.label}>
                    <ControlLabel>Confirm Password</ControlLabel>
                    <br/>
                    <FormControl
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <button className={classes.button}>Cancel</button>
                <button className={classes.button}>Register</button>
            </form>
        );
    }

    render() {
        return (
            <div>
                {this.state.newUser === null}
                {this.renderForm()}
            </div>
        );
    }
}

export default Registration