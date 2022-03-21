

const initState = {
       token: false,
       user : false,
       validations:false,
       error:false,
       success:false,
       loading:false,
    };

const AuthReducer = (state = initState, action) => {

    switch(action.type){

    case "Auth:update":{

        return {
                ...state, 
                token: action.payload.token == undefined ? state.token : action.payload.token,
                user: action.payload.user == undefined ? state.user : action.payload.user,
                validations: action.payload.validations == undefined ? state.validations : action.payload.validations,
                success: action.payload.success == undefined ? state.success : action.payload.success,
                error: action.payload.error == undefined ? state.error : action.payload.error,
               }



} default :{
                return state;
           }
}

}
export default AuthReducer;