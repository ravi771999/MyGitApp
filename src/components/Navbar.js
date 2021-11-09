import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ display:"flex",flexDirection:"row", color:"#1556a0"}}>
                <div className="navbar-left">
                    <h1>MyGitApp</h1>
                    <Link to="/" style={{textDecoration:"none",color:"#1556a0"}}>
                        <h3 style={{paddingLeft:"30px"}}>Profile Viewer</h3>
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/login" style={{textDecoration:"none",color:"#1556a0"}}>
                        <button type="button" class="btn btn-outline-primary">Login/Sign Up</button>
                    </Link>
                </div>
            </div>
        )
    }
}
