import React from 'react'
import { useState , useEffect} from 'react'

export default function Authentication() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [isChecked,setIsChecked]=useState(false);
    const [isCheckedRegister,setIsCheckedRegister]=useState(false);
    const [isRegistered,setIsRegistered]=useState(false);
    const [validationMessage,setValidationMessage]=useState("");

    let handleCheck=()=>{
        setIsChecked(!isChecked);
    }

    let handleCheckRegister=()=>{
        if(!isCheckedRegister){
            //check email is valid
            if(password == confirmPassword){
                setIsCheckedRegister(!isCheckedRegister);
                setValidationMessage("");
            }else{
                setValidationMessage("Password and Confirm Password doesn't match");
            }
        }else{
            setIsCheckedRegister(!isCheckedRegister);
        }
    }

    return (
        <div>
            <div class="login-form">
                {
                    validationMessage==""?
                    <div>

                    </div>
                    :<div className="error-validation">
                        **{validationMessage}**
                    </div>
                }
                {
                    !isRegistered?
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Name</label>
                            <div class="row signup-name">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" required={true}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input placeholder="Email address" type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} required={true}/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input placeholder="Password" type="password" class="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} required={true}/>
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Password</label>
                            <input placeholder="Confirm Password" type="password" class="form-control" id="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} required={true}/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="check"  checked={isCheckedRegister} onChange={()=>handleCheckRegister()} required={true}/>
                            <label class="form-check-label" for="check">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    :
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} required={true}/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} required={true}/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="check"  checked={isChecked} onChange={()=>handleCheck()}/>
                            <label class="form-check-label" for="check" required={true}>Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                }
 
            </div>
        </div>
    )
}
