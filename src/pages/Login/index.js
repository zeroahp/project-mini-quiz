import { useNavigate } from "react-router-dom";
import { getUser } from "../../service";
import {setCookie} from "../../helpers/cookie"
import { useDispatch } from "react-redux";
import {authen} from '../../actions/authen';
import "./login.scss"

function Login(){
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const passwd = e.target.elements.password.value;

      const response = await getUser(email, passwd);
      if(response.length > 0){
        const time = 1;
        setCookie("id", response[0].id, time);
        setCookie("fullName", response[0].fullName, time);
        setCookie("email", response[0].email, time);
        setCookie("token", response[0].token, time);
        navigate("/");
        dispatch(authen(true));
      }else {
        alert("Tài khoản hoặc mật khẩu không hợp lệ !");
      }
  }
    return(
        <>
           <div className="form">
              <div className="form__main">
                <h3>
                  Login Quiz
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form__submit" >
                      <input type="email" name="email" placeholder="Email" required/>
                      <input type="password" name="password" placeholder="password" required/>
                      <button className="button button-main">Login</button>
                      {/* <div>Login</div> */}
                  </div>
                </form>
              </div>
           </div>
        </>
    )
}

export default Login;