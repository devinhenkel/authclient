import axios from "axios";

const API_URL = 'http://localhost:3090';

export function loginUser({ email, password }) {
    return function(dispatch) {
        // this is how we get direct access to dispatch
        
        // submit email & passord (3090)
        axios.post(`${API_URL}/signin`, { email, password });

        // if request good
        // - update state to indicate authenticated
        // - save JWT token
        // - redirect user to "/feature"

        // if request is bad show error
    }
}