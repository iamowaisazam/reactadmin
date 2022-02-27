

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


// //________GET_AUTH
//   }case "Get_Auth":{

//     return {
//             ...state, 
//             user: action.payload.user == undefined ? state.user : action.payload.user,
//             token: action.payload.token == undefined ? state.token : action.payload.token,
//            }


// //______Register_Auth
// } case "Register_Auth":{

//  return {
//             ...state, 
//             validations:action.payload.validations ? action.payload.validations : false,
//             error: action.payload.error ? action.payload.error : false,
//             success: action.payload.success ? action.payload.success : false,
//             loading: action.payload.loading ? action.payload.loading : false,
//         }


// //_____Login_Auth
// } case "Login_Auth":{

// return {
//             ...state, 
//             error: action.payload.error ? action.payload.error : false,
//             success: action.payload.success ? action.payload.success : false,
//             loading: action.payload.loading  ? action.payload.loading : false,
//             user: action.payload.user == undefined ? state.user : action.payload.user,
//        } 


// //____Logout_Auth
// }case "Logout_Auth":{

//    return {
//               ...state, 
//               loading: action.payload.loading ? action.payload.loading : false,
//               user: action.payload.user ? action.payload.user : false,
//               token: action.payload.token ? action.payload.token : false,
//           } 


// //____Profile_Auth
// }case "Profile_Auth":{

//     return {
//                ...state, 
//                error: action.payload.error ? action.payload.error : state.error,
//                success: action.payload.success ? action.payload.success : state.success,
//                validations: action.payload.validations ? action.payload.validations : state.validations,
//            } 



// //___Loader
// }case "Loading_Auth":{

//     return {
//                 ...state, 
//                 loading: action.payload,
//            }


} default :{
                return state;
           }
}

}
export default AuthReducer;