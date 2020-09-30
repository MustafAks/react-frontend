import Axios from "axios";


export const signUp = (body) => {
    return Axios.post("user/", body);

}

export const login = (creds) => {
        return Axios.post("auth/login", {}, {auth: creds});
}