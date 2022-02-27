import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

function NotFound() {
    
    let nav = useNavigate();
    const dispatch = useDispatch();
    let {error,success} = useSelector( store => store.AuthReducer);

    useEffect(async () => {
        

        
    },[]);

    return (<>
             
        <div className='font-roboto bg-primary-base login-form min-vh-100'>
            <div className="my-auto login_content">
               <div className="pt-5 row">
                <div className="shadow-lg px-5 mx-auto bg-primary-contrast col-10 col-md-8 col-lg-6">
                        <div className="pt-4  login_logo_container text-center ">
                            <img className='logo' src={require('./assets/logo-dark.png')} />
                        </div>
                        <h1 className='py-4 text-center' >404 Not Found</h1>
                        <div className="pb-4 text-center ">
                            <Link to="/admin/login" className='font-weight-400 text-primary-black login_register_link'>Click For Home Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      <style jsx>{`

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

export default NotFound