import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link,useNavigate  } from 'react-router-dom';

function Register() {

    let nav = useNavigate();




    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token != null){
          nav('/admin/dashboard');
        }
  
      },[]);

    const handle = (e) => {

        e.preventDefault();

        let name = e.target.name;
        let password = e.target.password;
        let email = e.target.email;




        // if(email.value != 'iamowaisazam@gmail.com'){
        //     email.nextSibling.innerHTML = 'incorrect Email Address';
        //     validation = false;
        // }else{
        //     email.nextSibling.innerHTML = '';
        // }

        // if(password.value != '123'){
        //     password.nextSibling.innerHTML = 'incorrect Password';
        //     validation = false;
        // }else{
        //     password.nextSibling.innerHTML = '';
        // }

        axios.post(`${process.env.REACT_APP_API_URL}/register`, {
            name: name.value,
            email: email.value,
            password: password.value
          }).then(function (response) {

                email.nextSibling.innerHTML = '';
                password.nextSibling.innerHTML = '';
                name.nextSibling.innerHTML = '';

                if(response.data.message){
                    nav('/admin/login');
                }
          })
          .catch(function (error) {
            
            if(error.response.data.name){
                name.nextSibling.innerHTML = error.response.data.name[0]; 
            }else{
                name.nextSibling.innerHTML = ''; 
            }

            if(error.response.data.password){
                password.nextSibling.innerHTML = error.response.data.password[0]; 
            }else{
                password.nextSibling.innerHTML = '';
            }

            if(error.response.data.email){
                email.nextSibling.innerHTML = error.response.data.email[0]; 
            }else{
                email.nextSibling.innerHTML = ''; 
            }
            

          });

       

    }

    return (
        <div className='font-roboto bg-primary-base login-form vh-100'>
            <div className="my-auto register_content">
               <div className="pt-5 row">
                <div className="shadow-lg px-5 mx-auto bg-primary-contrast col-10 col-md-8 col-lg-6">
                        <div className="py-5 register_logo_container text-center ">
                            <img className='logo' src={require('./assets/logo-dark.png')} />
                        </div>
                        <form onSubmit={handle} className='' >
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name='name' required className="email form-control" placeholder='Full Name'  />
                                    <div className="text-danger form-text"></div>
                                </div>
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
                            <Link to="/admin/login" className='font-weight-400 text-primary-black register_login_link'  >Already Have Account ?</Link>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`
            
            .register_content
                padding:20px;
                margin:auto;
            }

            
            .logo{
                max-width:123px;
            }

            .register_login_link{
                font-size:16px;
            }
          
          `}</style>
        </div>
    )
}

export default Register
