import axios from 'axios';
import { isAuthenticated, logout, getToken } from '../login/helper/auth';
import { BACKEND } from './constans';

export const apiLogin = axios.create({
    baseURL: BACKEND,
})

apiLogin.interceptors.request.use(function(req){
    if(!isAuthenticated()){
        logout();
    }
    else{
        req.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return req
})

apiLogin.interceptors.response.use(res => {
    return res;
}, err => {
    if(!err.response){
        err.response = {
            data: "Error de conexión con el servidor"
        }
    }
    return Promise.reject(err);
})