
const AuthenReducer = (state=false, action) =>  {
    if(action.type === "CHECK_AUTHEN")
    {
        return action.status;
    } else{
        return state;

    }
}

export default AuthenReducer;