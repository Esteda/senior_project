import React, {Component} from "react";
import Registration from './Registration/registration';
import Login from './Login/login';
import classes from './init.css';

class Init extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover:false
        };
    };

    styleChange(){
        const curState = this.state.hover;
        this.setState({hover: !curState})
    }

    render(){
        let object = this.refs.login

        if(this.props.status=="register") {
            return (
                <div className={classes.div} >
                    <div>
                        <Registration></Registration>
                    </div>
                    <div className={this.state.hover? classes.overlayV:classes.overlay}>
                        <div className={this.state.hover? classes.textV:classes.text}  onClick ={this.styleChange.bind(this)} />
                        <br/>
                        {this.state.hover? (
                            <div>
                                <div className={classes.topper}>
                                    <Login className={classes.temp}></Login>
                                </div>
                            </div>

                        ):null}
                    </div>
                </div>
            );
        }
        else if(this.props.status=="login"){
            return (
                <div className={classes.div}>
                    <div>
                        <Login/>
                    </div>
                    <div className={this.state.hover? classes.overlayV:classes.overlay}>
                        <div className={this.state.hover? classes.text:classes.textV}  onClick ={this.styleChange.bind(this)}></div>
                        <br/>
                        <div className={classes.topper}>
                            <Registration className={classes.temp}></Registration>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Init;