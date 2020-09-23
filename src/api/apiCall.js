import Axios from "axios";


export const signUp = (body) => {
    return Axios.post("user/", body);

}