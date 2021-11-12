const intialState={
    userData:{},
    isLogin:false,
    password:"",
    loading:false,
    error:"",
}

const loginReducer = (state=intialState,action)=>{
    switch(action.type){
        case "LOGIN_REQ": return {...state,loading:true};
        case "LOGIN_SUC": return {...state,loading:false,userData:{...action.payload.userData.data},isLogin:true,password:action.payload.password};
        case "LOGIN_ERR": return {...state,loading:false,error:action.payload,isLogin:false};
        case "LOGOUT": return {...state,...intialState}
        default: return state;
    }
}

export default loginReducer;
