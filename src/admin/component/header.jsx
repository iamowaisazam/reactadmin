import axios from 'axios';
import react from 'react'
import { FaPowerOff,FaBars,FaWindowClose,FaUserAlt } from "react-icons/fa";
import {Link,useNavigate} from 'react-router-dom';



function Header(Props){

     const {handle_menuToggle,menuToggle} = Props;
     let nav = useNavigate();

    const [drop,SetDrop] = react.useState(false);
    const [menu,Setmenu] = react.useState(false);

    const handDrop = () => {
          if(drop == true){
            SetDrop(false);
          }else{
            SetDrop(true);
          }
    }

    const Out = () => {

        let token = localStorage.getItem('token');
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

        axios.get(`${process.env.REACT_APP_API_URL}/logout`, {})
        .then(function (response) {
            if(response.data.message){
                localStorage.removeItem('token');
                nav('/admin/login');
            }

        }).catch(function (error) {

            localStorage.removeItem('token');
            nav('/admin/login');
        });

    }

  return (<>

      <section className='header py-3'>
          <div className="container-fluid">
              <div className="d-flex  flex-row">
                    <div className="align-self-center ">
                        <img className='logo pr-2' src={require('../assets/logo-light.png')}  />
                    </div>
                    <div className="flex-fill align-self-center  ">
                        <div className=' text-end font-poppins ' >
                            <button onClick={handle_menuToggle} className="header-icons text-primary-contrast"  >
                             {menuToggle == true ? <FaWindowClose /> : <FaBars  />  } 
                            </button>
                            <Link  to="/admin/profile" >
                            <a className="text-primary-contrast header-icons" ><FaUserAlt /></a>
                            </Link>
                          
                            <button onClick={Out} className="text-primary-contrast header-icons" > <FaPowerOff /></button>
                            
                        </div>
                    </div>
              </div>
          </div>
      </section>
           
        
    <style jsx>{`

        a:hover {
            color: none !important;
         }

        .logo{
          max-width:148px;

        }

      
        
        .header-icons{
          padding: 0px 8px;
          font-size: 24px;
          line-height: 0px;
          margin: 0px;
          background: transparent;
          border: 0px;
        }
     
  


    `}</style>
  
   </>)
}
export default Header;