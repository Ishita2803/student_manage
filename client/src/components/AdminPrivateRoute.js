import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminPrivateRoute = ({component: Component, ...rest}) => {

    const isLogin= localStorage.getItem("isAdmin");
    
    return (

        <Route {...rest} render={props => (
            isLogin === 'true' ?
            <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default AdminPrivateRoute;