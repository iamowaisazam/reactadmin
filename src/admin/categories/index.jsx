import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Delete,Get} from '../../store/actions/CategoryAction'
import {FaEdit,FaWindowClose} from "react-icons/fa";

function Index() {

    const dispatch = useDispatch();
    let {data,loading} = useSelector( store => store.CategoryReducer);
        
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
                                   <h4 className="font-roboto mb-0 font-size-18">ALL Categories </h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">categories</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='profile-container container-fluid' >
                <div className="mb-2 card ">
                    <div className="card-body text-end ">
                        <Link to="/admin/categories/create" ><span className='btn btn-primary' >Add New Category </span></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='table-responsive' >
                        { loading ? <p className='text-center' >Loading Categories</p> :
                        <table className='table' >
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                              </tr>{ data ? data.map((module,key) => 
                                    { return <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{module.title}</td>
                                        <td>{module.des}</td>
                                        <td className="actions" >
                                            <Link to={"/admin/categories/edit/"+module.id}><span><FaEdit /></span></Link>
                                            <span onClick={() =>del(module.id)} className='pointer text-danger' ><FaWindowClose /></span>
                                        </td>
                                        </tr>}) : <tr>
                                            <td colSpan={8} > <p className='py-2' >Not Found Any Categories</p> </td>
                                        </tr> 
                                    }
                            </tbody>
                        </table> 
                        }
                        </div>
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

            .thumbnail{
                width:50px;
                height:33px;
            }
            
          `}</style>
 </>)
}

export default Index