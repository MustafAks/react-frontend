import React from "react";
import Axios from "axios";


class userSignup extends React.Component {


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

    onClickSignUp = event => {
        event.preventDefault();

        const {username, displayName, password, repeatPassword, aggre} = this.state;
        const body = {
            username,
            displayName,
            password,
            repeatPassword,
            aggre
        }

        Axios.post("http://localhost:8085/user/", body)

    }

    state = {
        username: null,
        aggre: false,
        displayName: null,
        password: null,
        repeatPassword: null
    };

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name={"username"} onChange={this.onChange}/>
                </div>
                <div>
                    <label>Display Name</label>
                    <input name={"displayName"} onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name={"password"} type={"password"} onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input name={"repeatPassword"} type={"password"} onChange={this.onChange}/>
                </div>
                <div>
                    <input name={"aggre"} type={"checkbox"} onChange={this.onChangeClicked}/> Aggree
                </div>
                <button disabled={!this.state.aggre} onClick={this.onClickSignUp}>Sign Up</button>


            </form>);
    }
}


export default userSignup;