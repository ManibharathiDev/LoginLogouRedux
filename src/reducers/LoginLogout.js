const initialState = false
const LoginLogout = (state=initialState,actions) =>{
    switch(actions.type)
    {
        case "LOGIN":
            state = true
            break;
        case "LOGOUT":
            state = false
            break;
        default:
            state = false
    }
    return state;
}

export default LoginLogout;