import { FaPowerOff,FaBars,FaWindowClose,FaUserAlt } from "react-icons/fa";
import {Link,useNavigate} from 'react-router-dom';


function Header(Props){

    let nav = useNavigate();
    const {handle_menuToggle,menuToggle} = Props;    


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