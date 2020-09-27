import Axios from "axios";


export const signUp = (body) => {
    return Axios.post("user/", body);

}

export const login = (body) => {
    return Axios.post("user/login", body);
}