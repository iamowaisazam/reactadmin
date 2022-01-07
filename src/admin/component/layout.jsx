import React,{useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import {Link,useNavigate} from 'react-router-dom';

import { FaPowerOff,FaWindows,FaUserFriends,FaProductHunt,FaPaypal } from "react-icons/fa";

function Layout(Props) {

    const [menuToggle,SetmenuToggle] = useState(true);
    const handle_menuToggle = () => {
       
        if(menuToggle == true){
            SetmenuToggle(false);
        }else{
            SetmenuToggle(true);
        }

    }


    return (
        <div className='main-con d-flex flex-column ' >
            <div className="header bg-primary-base">
                 <Header handle_menuToggle={handle_menuToggle} menuToggle={menuToggle} />
            </div>
            <div className={menuToggle == false ? 'd-flex sidebar-hide main-content flex-fill ' : 'd-flex main-content flex-fill ' }  >
                    <div className="font-roboto list-container ">
                            <div className="list-item">
                                <Link to="/admin/dashboard" > 
                                <span className='icon' > <FaWindows className='' /> </span>
                                <span className='link-title' >Dashboard</span> 
                                </Link> 
                            </div>
                            <div className="list-item">
                                <Link to="/admin/dashboard"  > 
                                <span className='icon' > <FaUserFriends className='' /> </span>
                                <span className='link-title' >Users</span> 
                                </Link> 
                            </div>
                            <div className="list-item">
                                <Link to="/admin/dashboard" > 
                                <span className='icon' > <FaProductHunt className='' /> </span>
                                <span className='link-title' >Roles</span> 
                                </Link> 
                            </div>
                            <div className="list-item">
                                <Link to="/admin/dashboard"  > 
                                <span className='icon' > <FaPaypal className='' /> </span>
                                <span className='link-title' >Products</span> 
                                </Link> 
                            </div>
                            <div className="list-item">
                                <Link to="/admin/dashboard" > 
                                <span className='icon' > <FaProductHunt className='' /> </span>
                                <span className='link-title' >Roles</span> 
                                </Link> 
                            </div>
                    </div>
                    <div className="theme-content flex-fill">
                        {Props.children}
                    </div>
                </div>
                <div className="footer bg-primary-base ">
                    <Footer/>
                </div>
                
                <style jsx>{`

                    .main-con{
                        height:100vh;
                    }

                    .main-content{
                        // overflow-y: scroll;
                    }
            
                    .theme-content{
                        background:#F3F3F3;
                    }

                    .list-item{
                        width: 162px;
                        padding:10px;
                        color:#747a80
                    }

                    .icon{
                        color: #012;
                        font-size: 17.5px;
                        padding: 0px 9px;
                    }

                    .link-title{
                        color:#012;
                        font-size: 14.5px;
                        font-weight:400;
                    }




                    .sidebar-hide .list-container{
                        background:#3281f2;
                        width:50px;
                        padding: 0px;
                    }

                    .sidebar-hide  .list-item.{
                        padding: 0px!important;
                    }

                    .sidebar-hide  .icon {
                        font-size: 17.5px;
                        padding: 0px 5px;
                        color:white;
                    }

                    .sidebar-hide .link-title{
                        display:none;
                    }

                `}</style>
        
        </div>
    )
}

export default Layout
