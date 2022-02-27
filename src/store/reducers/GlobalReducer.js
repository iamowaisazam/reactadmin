
 const initState = {
       loading:false,
       start:false,
   };

 const GlobalReducer = (state = initState, action) => {

 switch(action.type){

 case "Global:update":{
    return {
                ...state, 
                loading: action.payload.loading == undefined ? state.loading : action.payload.loading,
                start: action.payload.start == undefined ? state.start : action.payload.start,
            }


} default :{
                return state;
           }
}


}
 export default GlobalReducer;