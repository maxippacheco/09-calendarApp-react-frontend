import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //tiene todos los argumentos de la route

}) => {

    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route 
            {...rest}
            component={
                props =>(
                    //si esta autenticado que lo redireccione al componente sino al login
                    ( isAuthenticated)
                        ? <Component {...props} />
                        : <Redirect to='/login' />    
                )
            }
        />
            
        
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}