import axios from "axios"

export const loginReq=()=>{
    return{
        type: "LOGIN_REQ",
    }
}

export const loginSuc=(LoginData)=>{
    return{
        type: "LOGIN_SUC",
        payload: LoginData
    }
}

export const loginErr=(err)=>{
    return{
        type: "LOGIN_ERR",
        payload: err.message
    }
}

export const loginUserr=(creds)=>{
    return async (dispatch)=>{
        dispatch(loginReq());
        try{
            let res=await axios.get("https://api.github.com/user",{auth:{
                username:creds.username,
                password:creds.password
            }})
            dispatch(loginSuc(res))
        }catch(err){
            dispatch(loginErr(err))
        }     
    }
}