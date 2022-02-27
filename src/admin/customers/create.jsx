import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Add} from '../../store/actions/CustomerAction'

function Create() {

    const nav = useNavigate();
    const dispatch = useDispatch();
    let {validations,success,loading} = useSelector( store => store.CustomerReducer);
    
    const [form,setForm] = useState({
        name:'',
        email:'',
        phone:'',
        country:'',
        street_address:'',
        city:'',
        state:'',
        zip_code:'',
        details:'',
    });

    useEffect(() => {
    
        return () => {
           dispatch({type:'Customer:update',payload:{validation:false,success:false}});
        }
    }, [])

    
    useEffect(() => {
        if(success){
                setForm({
                    name:'',
                    email:'',
                    phone:'',
                    country:'',
                    street_address:'',
                    city:'',
                    state:'',
                    zip_code:'',
                    details:'',
                });
        }
    },[success])


    const inputChange = (e) => {
        let name = e.target.name;
        let value= e.target.value;
        setForm({...form,[name]:value})
    }


    const handle = async (e) => {
        e.preventDefault();
        dispatch(Add(form));
    }

    return (<>
         <div className="profile-screen">
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">Create Customer </h4>
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
                <div className="card">
                    <div className="card-body">
                    {loading ? <p className='text-center' >Loading Customers</p> :  <>
                        
                        <form onSubmit={handle} className='py-2' >
                            <div className="row">
                                <div className="col-md-4">
                                <div className="pb-1 form-group">
                                <label className='form-label' >Name</label>
                                <input onChange={inputChange} value={form.name} name='name' className="form-control"  />
                                { validations?.name? <p> {validations.name} </p> : ''}
                                 </div>
                                </div>
                                
                                <div className="col-md-4">
                                  <div className="pb-1 form-group">
                                    <label className='form-label'>Email address</label>
                                    <input onChange={inputChange} value={form.email} name='email' type="email" className="form-control" />
                                    { validations?.email? <p> {validations.email} </p> : ''}
                                </div>
                                </div>

                                <div className="col-md-4">
                                <div className="pb-1 form-group">
                                <label className='form-label'>Phone</label>
                                <input onChange={inputChange} value={form.phone} name='phone' className="form-control"  />
                                </div>
                                
                                </div>

                                <div className="col-md-3">
                                <div className="pb-1 form-group">
                                <label className='form-label'>Country</label>
                                <input onChange={inputChange} value={form.country} name='country' className="form-control"  />
                                </div>
                                </div>

                                <div className="col-md-3">
                                <div className="pb-1 form-group">
                                <label className='form-label'>City</label>
                                <input onChange={inputChange} value={form.city} name='city' className="form-control"  />
                                </div>
                                </div>

                                <div className="col-md-3">
                                <div className="pb-1 form-group">
                                <label className='form-label'>State</label>
                                <input onChange={inputChange} value={form.state} name='state' className="form-control"  />
                               </div>
                                </div>

                                <div className="col-md-3">
                                <div className="pb-1 form-group">
                                <label className='form-label'>Zipcode</label>
                                <input onChange={inputChange} value={form.zip_code} name='zip_code' className="form-control"  />
                                 </div>

                                </div>

                                <div className="col-md-12">
                                <div className="pb-1 form-group">
                                <label className='form-label'>Street Address</label>
                                <input onChange={inputChange} value={form.street_address} name='street_address' className="form-control"  />
                                 </div>
                                </div>

                                <div className="col-md-12">
                                <div className="pb-1 form-group">
                                <label className='form-label'>Details</label>
                                <input onChange={inputChange} value={form.details} name='details' className="form-control" />
                               </div>

                                </div>

                                <div className="col-md-12">
                                    <div className=" pt-3 pb-1 form-group text-center">
                                    <input type="submit" className='btn btn-primary' value="Submit" /> 
                                    </div>
                                </div>

                            </div>
                    
                        </form> 
                        </> }
                    </div>
                </div>
           </div>
       </div>


       <style jsx>{`

            .profile-screen{
      
            }

            .profile-container{
            
            }

            .profile-container form p {
                color:red;
                padding-top:5px;
                margin-bottom:4px;
            }

            .form-label {
                font-size: 16px;
                padding-bottom: 7px;
                color: #0e0e0e;
                font-weight: 500;
                padding: 0px;
            }

            .form .row > div {
                padding:0px 5px;
            }
                    
          `}</style>
 </>)
}

export default Create