import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { login,logout } from './actions';

function App() {

  const loginState = useSelector((state)=>state.LoginLogout);
  const dispatch = useDispatch();

  if(String(loginState) === "true")
  {
    return(
      <div className="App">
        <div className="container">
        {/* <h1>{String(loginState)}</h1> */}
            <h1>Welcome User!</h1>
            <h2>You are Succesfully Logged In.</h2>
            <button className='btnSubmit' onClick={()=>dispatch(logout())}>Logout</button>
            </div>
            </div>
    )
  }

  return (
    <div className="App">

        

        <div className="container">
        
              <h1>Login Here</h1>

              <div className="loginContainer">
                  
                        <div>
                          <label>User Name</label>
                          <br/>
                          <input className='myInputs' type="text"/>
                        </div>

                        <div>
                          <label>Password</label>
                          <br/>
                          <input className='myInputs' type="password"/>
                        </div>
                        <div>
                          <button className="btnSubmit" onClick={()=>dispatch(login())}>Login</button>
                        </div>
                  
              </div>
        </div>
    </div>
  );
}

export default App;
