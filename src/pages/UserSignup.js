import React from "react";
import {signUp} from "../api/apiCall";
import Input from "../component/input";

class userSignup extends React.Component {


    state = {
        userName: null,
        aggre: false,
        displayName: null,
        password: null,
        repeatPassword: null,
        pendingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
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

        const {userName, displayName, password, repeatPassword, aggre} = this.state;
        const body = {
            userName,
            displayName,
            password,
            repeatPassword,
            aggre
        }
        this.setState({pendingApiCall: true})

        try {
            // eslint-disable-next-line
            await signUp(body);
        } catch (error) {
            this.setState({errors: error.response.data.error});
            console.log(error.response.data.error.errorCode);

        }
        this.setState({pendingApiCall: false})
    }

    render() {
        const {pendingApiCall, errors} = this.state;
        const {message} = errors;

        return (
            <div className={"container"}>
                <h1 className={"text-center"}>Sign Up</h1>
                <div>
                    <form>
                        <div className={"text-center"}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Input name="userName" label="Username" error={this.state.errors.errorCode}
                                           onChange={this.onChange} message={message} isPassword={false}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <Input name="displayName" label="DisplayName" error={this.state.errors.errorCode}
                                           onChange={this.onChange} message={message} isPassword={false}/>
                                </div>
                            </div>
                        </div>

                        <div className={"text-center"}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Input name="password" label="Password" error={this.state.errors.errorCode}
                                           onChange={this.onChange} message={message} isPassword={true}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <Input name="repeatPassword" label="Password Repeat"
                                           error={this.state.errors.errorCode}
                                           onChange={this.onChange} message={message} isPassword={true}/>
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