import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex', height:"100px",flexDirection:"row",alignItems:"center", color:"#1556a0"}}>
                <h1>MyGitApp</h1>
                <h3 style={{paddingLeft:"30px"}}>Profile Viewer</h3>
                
            </div>
        )
    }
}
