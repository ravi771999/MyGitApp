import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout, logoutUserr } from '../redux/loginActions';
import { loginUserr } from '../redux/loginActions';

export class Navbar extends Component {
    constructor(props){
        super(props);
    }   

    handleLogout=()=>{
        this.props.logout();
    }

    render() {
        let data=JSON.parse(localStorage.getItem("login_info") || "{}");

        if(data == null){
            return;
        }
        const loginInfo=data;

        return (
            <div style={{ display:"flex",flexDirection:"row", color:"#1556a0"}}>
                <div className="navbar-left">
                    <h1>MyGitApp</h1>
                    <Link to="/" style={{textDecoration:"none",color:"#1556a0"}}>
                        <h3 style={{paddingLeft:"30px"}}>Profile Viewer</h3>
                    </Link>
                </div>
                <div className="navbar-right">
                    {
                        this.props.isLogin && <Link to="/profile" style={{textDecoration:"none",color:"#1556a0"}}>
                                <div className="card navbar-card">
                                    <img src={loginInfo.avatar_url} className="card-img-top navbar-card-image" alt={loginInfo.name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{loginInfo.login}</h5>
                                    </div>
                                </div>
                        </Link>
                    }

                    {
                        !this.props.isLogin?
                        <button type="button" class="btn btn-outline-primary">
                            <Link to="/login" style={{textDecoration:"none",color:"#1556a0"}}>
                            Login/Sign Up
                            </Link>
                        </button>
                        :
                        <button type="button" class="btn btn-outline-primary" onClick={()=>this.handleLogout()}>
                            Logout
                        </button>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        isLogin: state.login.isLogin,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        logout: ()=>dispatch(logoutUserr()),
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
