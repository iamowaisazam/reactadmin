import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import React,{useEffect} from 'react';
import { ToastContainer} from 'react-toastify';

//Pages
import NotFound from './admin/notfound';
import Login from './admin/login';
import Register from './admin/register';
import Dashboard from './admin/dashboard';
import Profile from './admin/profile';
import Home from './admin/home';


//Customers
import CustomersIndex from './admin/customers/index';
import CustomersCreate from './admin/customers/create';
import CustomersEdit from './admin/customers/edit';

//Products
import ProductsIndex from './admin/products/index';
import ProductsEdit from './admin/products/edit';
import ProductsCreate from './admin/products/create';


//Orders
import OrdersIndex from './admin/orders/index';

//Categories
import CategoriesIndex from './admin/categories/index';
import CategoriesCreate from './admin/categories/create';
import CategoriesEdit from './admin/categories/edit';







//Components
import Layout from './admin/component/layout';


import Loader from './admin/component/fullloader'
import {useDispatch,useSelector} from 'react-redux';
import {AppStart} from './store/actions/GlobalAction'


function Webroutes() {

   const dispatch = useDispatch();
   let store = useSelector( store => store);
   let loading = store.GlobalReducer.loading; 
   let start = store.GlobalReducer.start; 
   let user = store.AuthReducer.user;
   
   useEffect(() => {
    
        dispatch(AppStart());

   }, [])
return (<>
        <BrowserRouter>

            { start ? 
                <>
                    { loading ? <Loader /> : '' }
                    <ToastContainer
                        position="top-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />

                    <Routes>
                            <Route path='/admin/' element={ user ? <Layout/> : <Navigate  to="/admin/login" /> }>
                                <Route  path="profile" element={<Profile />}  /> 
                                <Route index  element={ <Dashboard />}  />

                                <Route  path="customers/index" element={<CustomersIndex />}  /> 
                                <Route  path="customers/create" element={<CustomersCreate />}  /> 
                                <Route  path="customers/edit/:id" element={<CustomersEdit />}  /> 

                                <Route  path="categories/index" element={<CategoriesIndex />}  /> 
                                <Route  path="categories/create" element={<CategoriesCreate />}  /> 
                                <Route  path="categories/edit/:id" element={<CategoriesEdit />}  /> 

                                <Route  path="products/index" element={<ProductsIndex />}  /> 
                                <Route  path="products/create" element={<ProductsCreate />}  /> 
                                <Route  path="products/edit/:id" element={<ProductsEdit />}  /> 

                                
                                <Route  path="orders/index" element={<OrdersIndex />}  />                         
                            </Route>
                        
                            <Route  path="/" element={ <Home/>} />   
                            <Route  path="/admin/login" element={ user ? <Navigate  to="/admin" /> : <Login /> } />  
                            <Route  path="/admin/register" element={ user ? <Navigate   to="/admin" /> : <Register />} /> 
                            <Route  path="*" element={<NotFound />}  />
                    </Routes> 
                </> : <Loader /> 
            }

        </BrowserRouter>
        </>);
}

export default Webroutes;