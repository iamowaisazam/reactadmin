import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';

function Dashboard() {

     const dispatch = useDispatch();

     let Category = useSelector( store => store.CategoryReducer);
     let Product = useSelector( store => store.ProductReducer);
     let Order = useSelector( store => store.OrderReducer);
     let Customer = useSelector( store => store.CustomerReducer);

    useEffect( () => {

        componentDidMount();
    },[]);

    const componentDidMount = async () =>  {

          
    }

    return (
           <>
    
             <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">Dashboard</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item">lot-process</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div className='container-fluid' >
                 <div className="row mb-3">
                    <div className="col-xl-3 col-sm-6 py-2 text-center align-self-center  ">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                        <div className="rotate">
                            <i className="pb-2 fa fa-user fa-4x" />
                        </div>
                        <h6 className="text-white text-uppercase">Customers</h6>
                       { Customer.loading ? 
                         <h1 className="text-white display-4">Loading..</h1> : 
                         <h1 className="text-white display-4">{Customer.data ? Customer.data.length : 1 }</h1> 
                       } 
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2 text-center align-self-center   ">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                        <div className="rotate">
                            <i className="pb-2 fab fa-product-hunt fa-4x" />
                        </div>
                        
                        <h6 className="text-white text-uppercase">Products</h6>
                        { Product.loading ? 
                        <h1 className="text-white  display-4">Loading..</h1> :
                        <h1 className="text-white  display-4">{Product.data ? Product.data.length : 1}</h1> 
                        }
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2 text-center align-self-center  ">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                        <div className="rotate">
                            <i className="pb-2 fas fa-shopping-cart fa-4x" />
                        </div>
                        <h6 className="text-white  text-uppercase">Orders</h6>
                        { Order.loading ? 
                        <h1 className="text-white  display-4">Loading..</h1>:
                        <h1 className="text-white  display-4">{Order.data ? Order.data.length : 0 }</h1>
                        }   
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2 text-center align-self-center ">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                        <div className="rotate">
                            <i className="fas fa-money-bill-alt pb-2 fa-4x" />
                        </div>
                        <h6 className="text-white  text-uppercase">Categories</h6>
                        { Category.loading ?
                        <h1 className="text-white  display-4">Loading..</h1>:
                        <h1 className="text-white  display-4">{Category.data ? Category.data.length : 0  }</h1>
                        }
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <div className="container-fluid">
                
              </div>
           </> 
    )
}

export default Dashboard