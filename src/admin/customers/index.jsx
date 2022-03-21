import React,{useEffect, useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Get,Delete} from '../../store/actions/CustomerAction'
import {FaEdit,FaWindowClose} from "react-icons/fa";

function Index() {

    const dispatch = useDispatch();
    let {data,loading} = useSelector( store => store.CustomerReducer);
        
    useEffect(() => {
    
        // dispatch(Get());       
    },[])

    const del = async (id) => {
    
        dispatch(Delete(id));
    }

    return (<>
         <div className="profile-screen">
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">ALL Customers </h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">customers</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='profile-container container-fluid' >
                <div className="mb-2 card ">
                    <div className="card-body text-end ">
                        <Link to="/admin/customers/create" ><span className='btn btn-primary' >Add New Customer </span></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">

                        { loading ? <p className='text-center' >Loading Customers</p> :
                        <div className='table-responsive' >
                        <table className='table' >
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Action</th>
                              </tr>{ data ? data.map((module,key) => 
                                    { return <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{module.name}</td>
                                        <td>{module.email}</td>
                                        <td>{module.phone}</td>
                                        <td>{module.country}</td>
                                        <td>{module.city}</td>
                                        <td className="actions" >
                                            <Link to={"/admin/customers/edit/"+module.id}><span><FaEdit /></span></Link>
                                            <span onClick={() =>del(module.id)} className='pointer text-danger' ><FaWindowClose /></span>
                                        </td></tr>}) : <tr>
                                            <td  colSpan={8} > <p className='py-2' >Not Found Any Customer</p> </td>
                                        </tr> 
                                    }
                            </tbody>
                        </table> 
                        </div>
                        
                        }

                        
                    </div>
                </div>
           </div>
       </div>

       <style jsx>{`

            table {
                margin: auto;
                border-collapse: collapse;
                width: 100%!important;
            }

            table th {
                border: 1px solid #ddd;
                text-align: center;
                padding: 12px 0px;
                background-color: #3281f2;
                color: white;
            }

            table td {
                text-align:center;
                border-bottom: 1px solid #ddd;
                padding: 8px;
                color: black;
            }

            table .icon{
                font-size: 30px;
            }

            .actions span {
                font-size: 33px!important;
                padding: 0px;
                margin: 0px;
                display: contents;
            }
    
                    
          `}</style>
 </>)
}

export default Index