import React from 'react'
import { useState , useEffect} from 'react'
import Navbar from './Navbar';


export default function Authentication(props) {
    const [email,setEmail]=useState(props.email);
    const [password,setPassword]=useState(props.password);
    const [isChecked,setIsChecked]=useState(props.isChecked);
    const [validationMessage,setValidationMessage]=useState(props.validationMessage);

    const handleCheck=()=>{
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <div class="login-form">
            {
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
            {
                validationMessage !="" &&
                <div className="error-validation">
                    {validationMessage}
                </div>
            }
        </div>
        </div>
    )
}

Authentication.defaultProps = {
    email: "",
    password: "",
    validationMessage:"",
    isChecked:false,
}
