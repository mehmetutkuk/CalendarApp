import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Redirect} from "react-router-dom";
import { logout } from '../../reducers/userSlice';
const LogoutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
    }, [])
    return (
        <div>
            <Redirect to="/login"/>
        </div>
    );
}

export default LogoutPage;
