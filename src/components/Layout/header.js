import { NavLink } from "react-router-dom";
import "./layout.scss"
import { getCookie } from "../../helpers/cookie";
import Logout from "../../pages/Logout";
function Header(){
const isToken = getCookie("token");

    return(
        <>
            <header className="header">
                <div className="header__logo">
                    <NavLink to="/">ZERO-QUIZ</NavLink>
                </div>
                {isToken ? (
                    <>
                        <div className="header__menu">
                            <div className="header__menu-item">
                                <NavLink to="/">Home</NavLink>
                            </div>
                            <div className="header__menu-item">
                                <NavLink to="topic">Topic</NavLink>
                            </div>
                            <div className="header__menu-item">
                                <NavLink to="answer">Answer</NavLink>
                            </div>
                        </div>

                        <div className="header__accounts-item">
                            <Logout />
                        </div>
                    </>
                   
                ) : (
                    <div className="header__accounts">
                        <div className="header__accounts-item">
                            <NavLink to="/login">Login</NavLink>
                        </div>
                        <div className="header__accounts-item">
                            <NavLink to="/register">Register</NavLink>
                        </div>
                    </div>
                )}
                

                
            </header>
            
        </>
    )
}

export default Header;