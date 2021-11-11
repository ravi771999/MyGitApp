import React from 'react'
import { useState , useEffect} from 'react'
import { connect } from 'react-redux';
import { loginUserr } from '../redux/loginActions';

export function Authentication(props) {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=(e)=>{
        e.preventDefault();
        let userN=username;
        let passW=password;
        props.loginUser({username: userN,password: passW});
    }

    return (
        <div>
            <div className="login-form">
                {
                    props.error != "" && <div className="error-validation">
                        **{props.error}**
                    </div>
                }
                {

                props.isLogin? 
                    <div className="error-validation">
                    **You Are Already Loged in**
                    </div>
                : <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Username</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=>{setUsername(e.target.value)}} required={true}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} required={true}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check" />
                        <label className="form-check-label" htmlFor="check" required={true}>Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                }
            </div>
        </div>
    )
}

const mapStateToProps= (state)=>{
    return {
        userData: state.login.userData,
        isLogin: state.login.isLogin,
        loading: state.login.loading,
        error:state.login.error,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        loginUser: (loginCreds)=>dispatch(loginUserr(loginCreds)),
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Authentication);