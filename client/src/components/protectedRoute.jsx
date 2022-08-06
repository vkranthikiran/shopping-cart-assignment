import React from "react";
import { Navigate} from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("auth_token");
    console.log("this", isAuthenticated);

    return isAuthenticated ? <Component/> : <Navigate to="/" />;

}
export default ProtectedRoute;
