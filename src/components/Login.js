import React , {useState} from 'react';

//useSelector
import { useDispatch } from 'react-redux';
import {login} from '../actions/agentAction';
//import Loader from './Loader';


function Login() {

 

     const dispatch=useDispatch();

    const [loginEmail,setLoginEmail]=useState("");  
    const [loginPassword,setLoginPassword]=useState("");
   const loginSubmit=(e)=>{
    e.preventDefault();
    
    dispatch(login(loginEmail,loginPassword));
   }


  return (
    <div class="content-wrapperes ">
     <div className="login-box">
  <div className="login-logo">
    <a href=" "><b>CRM</b></a>
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form onSubmit={loginSubmit} >
        <div className="input-group mb-3">
          <input type="email"
          required
          value={loginEmail}
          onChange={(e)=>setLoginEmail(e.target.value)}

          className="form-control"
           placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password"
          required
          value={loginPassword}
          onChange={(e)=>setLoginPassword(e.target.value)}
           className="form-control"
            placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div className="col-4">
            <button type="submit" value="login" className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
      </form>
      
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      
    </div>
  </div>
</div>


    </div>
  );
}

export default Login;
