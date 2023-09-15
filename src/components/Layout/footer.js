
import "./layout.scss"
import { Link } from "react-router-dom";
function Footer(){


    return(
        <>
            <div className="footer">
                <div className="footer__address">
                    <Link to="/">Email: anhhuynhphm@gmail.com</Link>
                    <Link to='/'>Address : Ninh Kieu, Can Tho</Link>
                </div>
                <div className="footer__social">
                   <Link to="https://www.facebook.com/ah.0929">Facebook</Link>
                   <Link to="https://github.com/zeroahp">Github</Link>
                   <Link to="https://www.instagram.com/ahpzero/">Instagram</Link>
                </div>
            </div>
            {/* <br /> */}
            {/* <br /> */}
            {/* <div className="footer__copy">Copyright 2023 by ZERO</div> */}
        </>        
    )
}

export default Footer;