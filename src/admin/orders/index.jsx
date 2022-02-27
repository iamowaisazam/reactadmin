import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Get} from '../../store/actions/OrderAction'
import {FaEdit,FaWindowClose} from "react-icons/fa";

function Index() {

    const dispatch = useDispatch();
    let {data,loading} = useSelector( store => store.OrderReducer);
        
    useEffect(() => {
    
        dispatch(Get());       
    },[])

    const del = async (id) => {
    
        // dispatch(Delete_Customers(id));
    }

    return (<>
         <div className="profile-screen">
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">ALL Orders </h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">orders</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='profile-container container-fluid' >
                <div className="mb-2 card ">
                    <div className="card-body text-end ">
                        <Link to="/admin/categories/create" ><span className='btn btn-primary' >Add New Order </span></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">

                        { loading ? <p className='text-center' >Loading Orders</p> :
                        <table>
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Ref</th>
                                    <th>status</th>
                                    <th>date</th>
                                    <th>Customer</th>
                                    <th>Action</th>
                              </tr>{ data ? data.map((module,key) => 
                                    { return <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{module.ref}</td>
                                        <td>{module.status}</td>
                                        <td>{module.date}</td>
                                        <td>{module.customer.name}</td>
                                        <td className="actions" >
                                            <Link to={"/admin/orders/edit/"+module.id}><span><FaEdit /></span></Link>
                                            <span onClick={() =>del(module.id)} className='pointer text-danger' ><FaWindowClose /></span>
                                        </td></tr>}) : <tr>
                                            <td  colSpan={8} > <p className='py-2' >Not Found Any Orders</p> </td>
                                        </tr> 
                                    }
                            </tbody>
                        </table> 
                        }
                    </div>
                </div>
           </div>
       </div>

       <style jsx>{`

            .profile-screen{
      
            }

            .profile-container{
            
            }

            table {
                margin: auto;
                width: 100%;
                border-collapse: collapse;
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