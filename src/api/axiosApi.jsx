import axios from 'axios';
import {SessionStorageService} from "./SessionStorageService";


var apiUrl = "";
if (process.env.NODE_ENV !== 'production') {
    apiUrl = "http://localhost:5000/"
  }else{
    apiUrl ="https://productiondomain/api/"
  }

const sessionStorageService = SessionStorageService.getService();
const headersPreset = {'Accept':'application/json'};

export const authInstance = axios.create({baseURL: apiUrl, headers: headersPreset });
export const publicInstance = axios.create({baseURL: apiUrl, headers: headersPreset});

const CancelToken = axios.CancelToken;
let cancel;

//Request Interceptors
authInstance.interceptors.request.use(
    config => {
        const token = sessionStorageService.getAccessToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        console.log(JSON.stringify(error));
        Promise.reject(error);
    });

publicInstance.interceptors.request.use(
    config => {
        if (cancel) {
            cancel(); // cancel request
        }
        config.cancelToken =  new CancelToken(function executor(c)
        {
            cancel = c;
        })
        return config
    },
    error => {
        console.log(JSON.stringify(error));
        Promise.reject(error);
    });
    

//Response Interceptors
authInstance.interceptors.response.use((response) => {
     if( response.data.data !=null && response.data.data.token!=null){
        sessionStorageService.setAccessToken(response.data.data.token);
        authInstance.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorageService.getAccessToken();
    }
    return response;
    }, function (error) {
        console.log(error);
        console.log(JSON.stringify(error));
        return Promise.reject(error);
    });

publicInstance.interceptors.response.use((response) => {
    console.log(JSON.stringify(response));
    return response;
    }, function (error) {
        return Promise.reject(error);
    });