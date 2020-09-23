import React from "react";
import {signUp} from "../api/apiCall";

class userSignup extends React.Component {


    state = {
        username: null,
        aggre: false,
        displayName: null,
        password: null,
        repeatPassword: null,
        pendingApiCall: false,
    };

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    onChangeClicked = event => {
        const {name, checked} = event.target;

        this.setState({
            [name]: checked
        })
    }

    onClickSignUp = async event => {
        event.preventDefault();

        const {username, displayName, password, repeatPassword, aggre} = this.state;
        const body = {
            username,
            displayName,
            password,
            repeatPassword,
            aggre
        }
        this.setState({pendingApiCall: true})

        try {
            // eslint-disable-next-line
            const response = await signUp(body);
        } catch (error) {

        }
        this.setState({pendingApiCall: false})
    }

    render() {
        const {pendingApiCall} = this.state;
        return (
            <div className={"container"}>
                <h1 className={"text-center"}>Sign Up</h1>
                <div>
                    <form>
                        <div className={"text-center"}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className={"form-group"}>
                                        <label>Username</label>
                                        <input name={"username"} className={"form-control"} onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Display Name</label>
                                    <input name={"displayName"} className={"form-control"} onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>

                        <div className={"text-center"}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className={"form-group"}>
                                        <label>Password</label>
                                        <input name={"password"} className={"form-control"} type={"password"}
                                               onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Password Repeat</label>
                                    <input name={"repeatPassword"} className={"form-control"} type={"password"}
                                           onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                        <div className={"text-center"}>
                            <div className={"form-group form-check"}>
                                <input name={"aggre"} type={"checkbox"} className={"form-check-input"}
                                       onChange={this.onChangeClicked}/> Aggree
                            </div>
                        </div>

                        <div className={"text-center"}>
                            <button disabled={pendingApiCall} className={"btn btn-primary"}
                                    onClick={this.onClickSignUp}>
                                {pendingApiCall &&
                                <span className="spinner-border spinner-border-sm"></span>}Sign Up
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        );


    }
}


export default userSignup;