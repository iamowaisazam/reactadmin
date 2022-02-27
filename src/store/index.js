import {createStore,combineReducers,applyMiddleware,compose } from 'redux'
import  thunkMiddleware from 'redux-thunk'


//Reducers
import AuthReducer from './reducers/AuthReducer'
import GlobalReducer from './reducers/GlobalReducer'
import CustomerReducer from './reducers/CustomerReducer'
import CategoryReducer from './reducers/CategoryReducer'
import OrderReducer  from './reducers/OrderReducer'
import ProductReducer from './reducers/ProductReducer'

const rootReducers = combineReducers({
    AuthReducer,
    GlobalReducer,
    CustomerReducer,
    CategoryReducer,
    ProductReducer,
    OrderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() =>{
    console.log('Updated State value',store.getState());
})

export default store