import {useState, useEffect} from "react"
import { getUser } from "../../service";
import "./home.scss"

import pichome from '../../asset/image/home.png';
import { getCookie } from "../../helpers/cookie";

function Home(){
    const UserName = getCookie("fullName");
    const [user, setuser] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getUser();
            // setuser(result); 
            console.log(result);           
        }
        fetchAPI();
    }, []);

    
    return(
        <>

            <div className="home">
                <div className="home__content">
                    <h1>Hi {UserName} !</h1>
                    <h1>WELCOM TO ZERO-QUIZ</h1>
                    <p>Begin your journey now and experience the excitement of 
                    learning about Information Technology through quizzes 
                    on this platform. Thank you for visiting,
                    and become a part of our vibrant IT community!</p>
                </div>
                <div className="home__img">
                    <img src={pichome} alt="home_page" />
                    
                </div>
            </div>
        </>
    )
}

export default Home;