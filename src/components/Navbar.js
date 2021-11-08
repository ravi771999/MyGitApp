import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ display:"flex",flexDirection:"row", color:"#1556a0"}}>
                <div className="navbar-left">
                    <h1>MyGitApp</h1>
                    <h3 style={{paddingLeft:"30px"}}>Profile Viewer</h3>
                </div>
                <div className="navbar-right">
                    <button type="button" class="btn btn-outline-primary">Login/Sign Up</button>
                </div>
            </div>
        )
    }
}
