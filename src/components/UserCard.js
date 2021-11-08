import React, { Component } from 'react'

import axios from 'axios';

export default class UserCard extends Component {

    constructor(){
        super();
        this.state={
            userData:{},
            userName:"ravi771999",
        }
    }

    async componentDidMount(){
        let response=await axios.get(`https://api.github.com/users/${this.state.userName}`);
        let data=response.data;
        console.log(data);
        this.setState({
            userData:{...data},
        })
    }

    handleSearch=async (text)=>{
        let response=await axios.get(`https://api.github.com/users/${text}`);
        let data=response.data;
        console.log(data);
        // console.log(response.status);

        if(data == undefined){
            return;
        }

        this.setState({
            userData:{...data},
            userName:text,
        })
    }

    render() {

        let userData= this.state.userData;

        return (
            <div className="main-card">

                <div className="input-group flex-nowrap user-search" style={{width: "18rem"}}>
                    <input type="text" className="form-control" placeholder="Enter The Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>this.handleSearch(e.target.value)}/>
                </div>

                <div className="user-card">
                        {
                            userData==""?
                            (<div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            ):(
                                <div className="card" style={{width: "18rem"}}>
                                <img src={userData.avatar_url} className="card-img-top" alt={userData.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{userData.login}</h5>
                                    <p className="card-text">{userData.bio}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" ><em>{userData.location}</em></li>
                                    <li className="list-group-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                Followers: {userData.followers}
                                            </div>
                                            <div className="col">
                                                Following: {userData.following}
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    {
                                        userData["email"] == undefined? <div></div> :<li className="list-group-item">Email ID: {userData}</li>
                                    }
                                </ul>
                                <div className="card-body card-links">
                                    <a href={userData.blog} className="card-link">Blog</a>
                                    <a href={userData.html_url} className="card-link">Visit to Github Profile</a>
                                </div>
                                </div>
                            )
                        }
                </div>
            </div>
        )
    }
}
