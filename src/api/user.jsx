import {authInstance} from './axiosApi';
export async function Login(value){
        return await authInstance.get('/users',value);
}