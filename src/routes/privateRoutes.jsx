import React from "react";
import { Route, Redirect } from "react-router-dom";
const privateRoutes = ({ component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("token") !== null;

    const routeComponent = (props) =>
        isAuthenticated ? (
            React.createElement(component, props)
        ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location },
                }}
            />
        );
    return <Route {...rest} render={routeComponent} />;
};

export default privateRoutes;
