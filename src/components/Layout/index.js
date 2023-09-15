import {Outlet} from "react-router-dom"
import Header from "./header";
import "./layout.scss"
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player';
import Footer from "./footer";
function Layout(){
    const authen = useSelector(state => state.AuthenReducer);
    // console.log(authen);

    return(
        <>
            <div className="layout">
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;