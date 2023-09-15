import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { createUser, getUser } from "../../service";
import "./register.scss"


function Register(){
const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const fullName = e.target.elements.fullName.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const token = generateToken();

        const options = {
            fullName: fullName,
            email: email,
            password: password,
            token: token
        };

        const checkExist = await getUser(email);

        if(checkExist.length > 0){
            alert("Email đã tồn tại !");
        }else{
            const result = await createUser(options);
            if(result)
                navigate("/login");
        }
    }

    return(
        <>
            <div className="register">
                <div className="register__form">
                    <h3 className="inner-title">Register Account</h3>
                    <form className="register__submit" onSubmit={handleSubmit}>
                        <input name="fullName" type="text" placeholder="Fullname" required/>
                        <input name="email" type="email" placeholder="Email" required/>
                        <input name="password" type="password" placeholder="Password" required/>
                        <button className="button button-main">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;