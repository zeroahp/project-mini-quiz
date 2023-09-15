import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";
import { useEffect, useState } from "react";

function PrivateRoute(){
    const isToken = getCookie("token");

    // const [isToken, setisToken] = useState(getCookie("token"));
    // useEffect(() => {
    //     const token = getCookie("token");
    //     setisToken(token);
    // }, [isToken]);
    return(
        <>
            {isToken ? (<Outlet />) : (<Navigate to="/login" />)}
        </>
    )
}

export default PrivateRoute;