import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //resto de props

}) => {
    
    
    return (
        <Route 
            {...rest}
            component={
                props =>(
                    //si esta autenticado que lo redireccione al componente sino al login
                    ( isAuthenticated )
                       ? (<Redirect to='/' /> )
                       :  (<Component {...props} />)    
                )
            }
        />
            
        
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}