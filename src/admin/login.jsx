import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';

function Login() {

    let nav = useNavigate();

    const handle = (e) => {

        e.preventDefault();

        let password = e.target.password;
        let email = e.target.email;
        let validation = true;

        if(email.value != 'iamowaisazam@gmail.com'){
            email.nextSibling.innerHTML = 'incorrect Email Address';
            validation = false;
        }else{
            email.nextSibling.innerHTML = '';
        }

        if(password.value != '123'){
            password.nextSibling.innerHTML = 'incorrect Password';
            validation = false;
        }else{
            password.nextSibling.innerHTML = '';
        }

        if(validation == true){
            nav('/admin/dashboard');
            
        }

    }

    return (
        <div className='font-roboto bg-primary-base login-form vh-100'>
            <div className="my-auto login_content">
               <div className="pt-5 row">
                <div className="shadow-lg px-5 mx-auto bg-primary-contrast col-10 col-md-8 col-lg-6">
                        <div className="py-5 login_logo_container text-center ">
                            <img className='logo' src={require('./assets/logo-dark.png')} />
                        </div>
                        <form onSubmit={handle} className='' >
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" name='email' required className="email form-control" placeholder='Email address'  />
                                    <div className="text-danger form-text"></div>
                                </div>
                                <div className=" mb-3">
                                    <label className="form-label">Password</label>
                                    <input required name='password' placeholder='Password' type="password" className="password form-control"  />
                                    <div className="text-danger form-text"></div>
                                </div>
                                <div className=" mb-3 text-center ">
                                    <input className='bg-primary-base text-primary-contrast  btn-1' type="submit" value="Submit" />
                                </div>
                        </form>
                        <div className="pb-4 text-center ">
                            <Link to="/admin/register" className='font-weight-400 text-primary-black login_register_link'  >Dont Have Account ?</Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            
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
        </div>
    )
}

export default Login
