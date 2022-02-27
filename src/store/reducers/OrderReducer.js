const initState = {
    data : false,
    error:false,
    success:false,
    validations:false,
    edit:false,
    loading:false,
 };

const OrderReducer = (state = initState, action) => {

 switch(action.type){

 case "Order:update":{

     return {
             ...state, 
             data: action.payload.data == undefined ? state.data : action.payload.data,
             success: action.payload.success == undefined ? state.success : action.payload.success,
             error: action.payload.error == undefined ? state.error : action.payload.error,
             validations: action.payload.validations == undefined ? state.validations : action.payload.validations,
             single: action.payload.single == undefined ? state.single : action.payload.single,
             loading: action.payload.loading == undefined ? state.loading : action.payload.loading,
            }

} default :{
             return state;
        }
}

}
export default OrderReducer;