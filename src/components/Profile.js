import React from 'react'
import { loginErr } from '../redux/loginActions';

function Profile() {

    let data=JSON.parse(localStorage.getItem("login_info") || "{}");

    if(data == null){
        return;
    }
    const loginInfo=data;
    console.log(loginInfo);

    return (
        <div className="profile-box">
            <div class="card mb-3" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={loginInfo.avatar_url} className="card-img-top" alt={loginInfo.name}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div className="card-body">
                            <h5 className="card-title">{loginInfo.name}</h5>
                            <p className="card-text">{loginInfo.bio}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><em>Followers :</em> {loginInfo.followers}</li>
                            <li className="list-group-item"><em>Following :</em> {loginInfo.following}</li>
                            <li className="list-group-item"><em>email :</em> <a href={loginInfo.email}>{loginInfo.email}</a></li>
                            <li className="list-group-item">                        
                                <div className="card-body card-link">
                                    <a href={loginInfo.blog} className="card-link">Blog</a>
                                    <a href={loginInfo.html_url} className="card-link">Visit to Github Profile</a>
                                </div>
                            </li>
                            {
                                loginInfo.company != "" && <li className="list-group-item"> <em>Company :</em> {loginInfo.company}   </li>
                            }
                            {
                                loginInfo.location != "" && <li className="list-group-item"> <em>Location :</em> {loginInfo.location} </li>
                            }
                            <li className="list-group-item"><em>Number of public repos :</em> {loginInfo.public_repos}</li>
                            <li className="list-group-item"><em>created at :</em> {loginInfo.created_at}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
