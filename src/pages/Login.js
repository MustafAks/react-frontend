import React from "react";
import {login} from "../api/apiCall";
import Input from "../component/input";

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
        let creds = {
            username: userName,
            password: password
        }
        try {
            await login(creds);
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
                        <Input label="Username" name="userName" isPassword={false} onChange = {this.onChange}/>
                        <Input label="Password" name="password" isPassword={true} onChange = {this.onChange}/>

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