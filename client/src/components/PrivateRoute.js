import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'

const PrivateRoute = ({component: Component, ...rest}) => {

    const isLogin= localStorage.getItem("isAuthenticated");
    
    return (

        <Route {...rest} render={props => (
            isLogin === 'true' ?
            <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;