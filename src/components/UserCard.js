import React, { Component } from 'react'

import axios from 'axios';

export default class UserCard extends Component {

    constructor(){
        super();
        this.state={
            userData:{},
            userName:"ravi771999",
            profileExists:true,
        }
    }

    async componentDidMount(){
        let response=null;

        try{
            response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        }catch (err) {

        }

        if(response == null){
            this.setState({
                profileExists:false,
            })
            return;
        }

        let data=response.data;

        this.setState({
            userData:{...data},
        })
    }

    handleSearch=(text)=>{
        this.setState({
            userName:text,
        })
    }

    handleSearching= async ()=>{
        let response=null;

        try{
            response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        }catch (err) {
            
        }

        if(response == null){
            this.setState({
                profileExists:false,
            })
            return;
        }

        this.setState({
            userData:{...response.data},
            userName:"",
            profileExists:true,
        })
    }

    render() {

        let userData= this.state.userData;

        return (
            <div className="main-card">

                <div className="input-group flex-nowrap user-search" style={{width: "18rem"}}>
                    <input type="text" className="form-control" placeholder="Enter The Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>this.handleSearch(e.target.value)}/>
                    <button type="submit" class="btn btn-primary" onClick={()=>this.handleSearching()}>Submit</button>
                </div>
                {
                    !this.state.profileExists?
                        <div className="profile-not-exists">
                            <div>**Profile does not exits**</div> 
                            <div>**Please search a valid github user**</div>
                        </div>
                    :<div className="user-card">
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
                                            userData["email"] != undefined && <li className="list-group-item">Email ID: {userData}</li>
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
                }
            </div>
        )
    }
}
