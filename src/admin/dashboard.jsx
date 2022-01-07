import React,{useEffect} from 'react'
import Layout from './component/layout'
import {Link,useNavigate} from 'react-router-dom'

function Dashboard() {

    let nav = useNavigate();

    useEffect(() => {
      let token = localStorage.getItem('token');
      if(token == null){
        nav('/admin/login');
      }

    },[]);


    return (
        <Layout> 
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
                        <h1 className="text-white display-4">4</h1>
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
                        <h1 className="text-white  display-4">3</h1>
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
                        <h1 className="text-white  display-4">3</h1>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2 text-center align-self-center ">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                        <div className="rotate">
                            <i className="fas fa-money-bill-alt pb-2 fa-4x" />
                        </div>
                        <h6 className="text-white  text-uppercase">Payments</h6>
                        <h1 className="text-white  display-4">136457</h1>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
        </Layout>
    )
}

export default Dashboard
