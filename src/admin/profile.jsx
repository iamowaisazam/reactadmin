import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {Profile_Auth,getAuth} from '../store/actions/AuthAction';




function Profile() {

    const nav = useNavigate();
    const dispatch = useDispatch();
    let {loading,user,validations,success} = useSelector( store => store.AuthReducer);
    const [form,setForm] = useState({name:'',email:'',password:''});
        
    useEffect(() => {

        setForm({
            name:user.name,
            email:user.email,
            password:'',
        })
        
    },[])

    const inputChange = (e) => {
        let name = e.target.name;
        let value= e.target.value;
        setForm({...form,[name]:value})
    }

    const handle = async (e) => {
        e.preventDefault();
        dispatch(Profile_Auth(form));
    }

    return (<>
         <div className="profile-screen">
           <div className="container-fluid">
                 <div className="row">
                        <div className="mt-2 col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                   <h4 className="font-roboto mb-0 font-size-18">Profile</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">dashboard</li>
                                        <li className="breadcrumb-item">profile</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='profile-container container-fluid' >
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handle} className='py-2' >
                            <div className="pb-1 form-group">
                                <label className='form-label' >Username</label>
                                <input onChange={inputChange} value={form.name} name='name' className="form-control"  />
                                { validations?.name? <p> {validations.name} </p> : ''}
                                
                            </div>
                            <div className="pb-1 form-group">
                                <label className='form-label'>Email address</label>
                                <input onChange={inputChange} value={form.email} name='email' type="email" className="form-control" />
                                { validations?.email? <p> {validations.email} </p> : ''}
                            </div>
                            <div className="pb-1 form-group">
                                <label className='form-label'>Password</label>
                                <input onChange={inputChange} value={form.password} name='password' type="password" className="form-control" placeholder='leave blank' />
                                { validations?.password? <p> {validations.password} </p> : ''}
                            </div>
                            <div className=" pt-3 pb-1 form-group text-center">
                                <input type="submit" className='btn btn-primary' value="Update" /> 
                            </div>
                        </form>
                    </div>
                </div>
           </div>
       </div>


       <style jsx>{`

            .profile-screen{
      
            }

            .profile-container{
            
            }

            .profile-container p {
                color:red;
                padding-top:11px;
                margin-bottom:0px;
            }
                    
          `}</style>
 </>)
}

export default Profile