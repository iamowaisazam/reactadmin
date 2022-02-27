import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Login_Auth} from '../store/actions/AuthAction'


function Login() {
    
    const dispatch = useDispatch();
    let {error,success,loading} = useSelector( store => store.AuthReducer);
    const [form,setForm] = useState({email:'',password:''});

    // with useEffect()
    useEffect(() => {
          return () => {
            
          }
    }, [])


    const inputChange = (e) => {
        let name = e.target.name;
        let value= e.target.value;
        setForm({...form,[name]:value})
    }


    return (<>
             
        <div className='font-roboto bg-primary-base login-screen'>
           <div className="my-auto login-container">
              <div className="shadow-lg px-5 bg-primary-contrast ">

                    <div className="py-5 login_logo_container text-center ">
                        <img className='logo' src={require('./assets/logo-dark.png')} />
                    </div>

                    <div className="mb-1">
                        <label className="form-label"> Email Address </label>
                        <input type="email" value={form.email} onChange={inputChange} name='email'  className="form-control" placeholder='Email address'  />
                    </div>
                    <div className=" mb-1">
                        <label className="form-label">Password</label>
                        <input name='password' value={form.password} onChange={inputChange} placeholder='Password' type="password" className="form-control"  />
                    </div>
                    <div className=" pt-3 mb-3 text-center ">
                        <button  onClick={() => dispatch(Login_Auth(form))  }  type='button'   className='bg-primary-base text-primary-contrast btn-1' >Submit</button>
                    </div>

                    <div className="pb-4 text-center ">
                        <Link to="/admin/register" className='font-weight-400 text-primary-black login_register_link'  >Dont Have Account ?</Link>
                    </div>
             </div>
          </div>
      </div>
        
      <style jsx>{`

                .login-screen{
                    justify-content: center;
                    display: flex;
                    min-height:100vh;
                    align-items: center;
                }

                .login-container{
                    max-width:700px;
                    width:98%;

                }

                    form p {
                        color:red;
                        padding-top:11px;
                    }
            
                    .login_content
                        padding:20px;
                        margin:auto;
                    }

                    .login_heading{
                        font-size: 26px;
                    }

                    .login_subheading{
                        font-size: .875rem;
                        color:#6c757d !important
                        font-size: 13px;
                    }

                    .logo{
                        max-width:123px;
                    }

                    .login_register_link{
                        font-size:16px;
                    }
          
          `}</style>
      </>)
}

export default Login