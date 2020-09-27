import React from "react";
import {login} from "../api/apiCall";

class Login extends React.Component {

    state = {
        userName: null,
        password: null
    }

    onChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    onClickLogin = async (event) => {
        event.preventDefault();
        const {userName, password} = this.state;
        const body = {
            userName: userName,
            password: password
        }
        try {
            await login(body);
        } catch (error) {
            console.log(error);
        }


    }


    render() {
        return (
            <div className={"container"}>
                <h1 className={"text-center"}>Login</h1>
                <div>
                    <form>
                        <div>
                            <label>User Name</label>
                            <input name={"userName"} className={"form-control"} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input name={"password"} className={"form-control"} onChange={this.onChange}/>
                        </div>

                        <div className={"text-center"}>
                            <button className={"btn btn-primary"}
                                    onClick={this.onClickLogin}>Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


}

export default Login;