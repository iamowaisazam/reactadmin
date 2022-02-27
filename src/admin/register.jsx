import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {Register_Auth} from '../store/actions/AuthAction'

function Register() {

    let nav = useNavigate();
    const dispatch = useDispatch();
    let {error,success,validations,loading} = useSelector( store => store.AuthReducer);
    const [form,setForm] = useState({name:'',email:'',password:''});

    useEffect(() => {
        
        return () => {
            dispatch({type:'Auth:update',payload:{validation:false,success:false}});
        }
    }, [])

    useEffect(() => {

        if(success){
            setForm({
                name:'',
                email:'',
                password:''
            });
            nav('/admin/login');
        }

    },[success])

    
     const inputChange = (e) => {
        let name = e.target.name;
        let value= e.target.value;
        setForm({...form,[name]:value})
    }

    return (<>
    
        <div className='font-roboto bg-primary-base register-screen'>
          <div className="my-auto register-container">
                <div className="shadow-lg px-3 px-md-5 bg-primary-contrast">
                        <div className="py-5 register_logo_container text-center ">
                            <img className='logo' src={require('./assets/logo-dark.png')} />
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Full Name</label>
                            <input onChange={inputChange} value={form.name}  name='name' className="form-control" placeholder='Full Name'  />
                            { validations?.name? <p> {validations.name} </p> : ''}
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Email Address</label>
                            <input type="email" onChange={inputChange} name='email' className="form-control" placeholder='Email address' value={form.email}  />
                            {validations?.email? <p>{validations.email} </p> : ''} 
                        </div>
                        <div className=" mb-1">
                            <label className="form-label">Password</label>
                            <input name='password' onChange={inputChange}  placeholder='Password' type="password" value={form.password} className="form-control"  />
                            <p>{validations?.password? validations.password : ''}</p>
                        </div>
                        <div className="mt-3 text-center">
                          <button  onClick={() => dispatch(Register_Auth(form))  }   type='button'   className='bg-primary-base text-primary-contrast btn-1' >Submit</button>
                        

                        </div>
                        <div className="pb-4 pt-3 text-center ">
                            <Link to="/admin/login" className='font-weight-400 text-primary-black register_login_link'  >Already Have Account ?</Link>
                        </div>
                </div>
            </div>
        </div> 

        <style jsx>{`

            .register-screen{
                justify-content: center;
                display: flex;
                min-height:100vh;
                align-items: center;
            }

            .register-container{
                max-width:700px;
                width:98%;
            }

            .register-container label{
                padding-bottom: 0px;
                padding-top: 5px;
            }

            .register-container p {
                color:red;
                padding-top:11px;
                margin-bottom:0px;
            }

            .register-container .logo{
                max-width:123px;
            }

           .register-container  .register_login_link{
                font-size:16px;
            }

        
          `}</style>
    </>)
}

export default Register
