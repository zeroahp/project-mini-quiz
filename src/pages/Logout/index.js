import { Link, useNavigate } from "react-router-dom"
import { deleteAllCookies } from "../../helpers/cookie";
import { authen } from "../../actions/authen";
import {useDispatch} from 'react-redux';
function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handlLogout = () => {
        deleteAllCookies();
        navigate("/login");
        dispatch(authen(false));
    }
    return(
        <>
            <Link onClick={handlLogout}>Logout </Link>
        </>
    )
}

export default Logout;