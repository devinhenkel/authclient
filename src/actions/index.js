import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

const API_URL = 'http://localhost:3090';

export function loginUser({ email, password }, history) {
    return function(dispatch) {
        // this is how we get direct access to dispatch
        
        // submit email & passord (3090)
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                console.log(response.data.token);
                // if request good
                // - update state to indicate authenticated
                dispatch({ type: AUTH_USER });
                // - save JWT token
                localStorage.setItem('jwt', response.data.token)
                // - redirect user to "/feature"
                history.push('/feature');
            })
            .catch((() => {
                // if request is bad show error
                
                dispatch(authError('Bad credentials.'));
            }));

    }
}

export function authError(error) {
    console.log(error);
    return{
        type: AUTH_ERROR,
        payload: error
    };
}

