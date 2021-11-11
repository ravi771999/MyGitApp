const intialState={
    userData:{},
    userName:"ravi771999",
    profileExists:true,
}

const userReducer = (state=intialState,action)=>{
    switch( action.type ){
        case "GET_SEARCHED_USER":{
            return {...state,userData:{...action.payload},profileExists:true};
        }
        case "HANDLE_SEARCH_TEXT":{
            return {...state,userName:action.payload}
        }
        case "HANDLE_PROFILE_EXISTS":{
            return {...state,profileExists:false};
        }
        default: 
            return state;
    }
}

export default userReducer;
