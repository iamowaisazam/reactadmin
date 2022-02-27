import React from 'react'
import {Link} from 'react-router-dom'

function home() {
  return (<>

        <div className='font-roboto bg-primary-base home-screen'>
            <div className="home-screen-container">
                     <div className='px-4 py-4 shadow-lg mx-auto bg-primary-contrast' >
                            <div className='text-center' >
                                <img className='logo' src={require('./assets/logo-dark.png')} />
                            </div>
                            <p className='pt-4' >The Dynamic Invoice Management (DIM) Software is Specially Design And Developed For Customer Invoices and Bill Generation With Multiple Features. Its Completely Free Hope You Like It Just Download Install and Use It Also Share With Your Friends. </p>
                            <div className="pt-3 text-center ">
                                <Link to="/admin/login" className='btn font-weight-400 bg-primary-base text-primary-contrast'>Get Started</Link>
                            </div>
                    </div>
             </div>
        </div>

        <style jsx>{`
                
                .home-screen{
                    justify-content: center;
                    display: flex;
                    min-height:100vh;
                    align-items: center;
                }

                .home-screen-container{
                    max-width:700px;
                    width:98%;
                }

                .home-screen-container p{
                    color: #5e5959;
                }


                .logo{
                    max-width:123px;
                }

                .login_register_link{
                    font-size:16px;
                }

        `}</style>

</>  )
}




export default home