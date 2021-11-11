import React, { useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

function UserCard(props) {

    useEffect(() => {
        async function initalize(){
            let response=null;
            try{
                response = await axios.get(`https://api.github.com/users/${props.userName}`);
            }catch (err) {
                        
            }
            
            if(response == null){
                props.handleProfileExists();
            }else
                props.handleSearching(response.data);
        }
        initalize();
        console.log(props);
    },[]);

    const handleSearch=()=>{
        async function searchProfile(){
            let response=null;
            try{
                response = await axios.get(`https://api.github.com/users/${props.userName}`);
            }catch (err) {
                
            }

            if(response == null){
                props.handleProfileExists();
            }else
                props.handleSearching(response.data);
        }
        searchProfile();
    }

    const userData=props.userData;
    const profileExists=props.profileExists;

    return (
            <div className="main-card">

                <div className="input-group flex-nowrap user-search" style={{width: "18rem"}}>
                    <input type="text" className="form-control" placeholder="Enter The Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>props.handleSearchText(e.target.value)}/>
                    <button type="submit" className="btn btn-primary" onClick={()=>handleSearch()}>Submit</button>

                </div>
                {
                    !profileExists?
                        <div className="profile-not-exists">
                            <div>**Profile does not exits**</div> 
                            <div>**Please search a valid github user**</div>
                        </div>
                    :<div className="user-card">
                            {
                                userData != "" && (
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
                }
            </div>
    )
}

const mapStateToProps= (state)=>{
    return {
        userData: state.user.userData,
        userName: state.user.userName,
        profileExists: state.user.profileExists,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleSearching : (data)=>dispatch({type: "GET_SEARCHED_USER",payload:data}),
        handleSearchText: (text)=>dispatch({type: "HANDLE_SEARCH_TEXT",payload: text}),
        handleProfileExists: ()=>dispatch({type: "HANDLE_PROFILE_EXISTS"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserCard);
