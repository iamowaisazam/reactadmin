import react from 'react'
import { FaPowerOff,FaBars,FaWindowClose,FaUserAlt } from "react-icons/fa";


function Header(Props){

     const {handle_menuToggle,menuToggle} = Props;

    const [drop,SetDrop] = react.useState(false);
    const [menu,Setmenu] = react.useState(false);

    const handDrop = () => {
          if(drop == true){
            SetDrop(false);
          }else{
            SetDrop(true);
          }
    }

    // const menuToggle = () => {
    //     if(menu == true){
    //       Setmenu(false);
    //     }else{
    //       Setmenu(true);
    //     }
    // }

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
                            <a className="text-primary-contrast header-icons " href="/" >
                              <FaUserAlt className='' />
                            </a>
                            <a className="text-primary-contrast header-icons " href="/" >
                              <FaPowerOff className='' />
                            </a>
                        </div>
                        <div className="d-none d-block d-md-none text-end font-poppins " >
                          <a className="m-0 p-0 menu-toggle-button text-primary-contrast" href="#" > Menu</a>
                        </div>
                    </div>
              </div>
          </div>
      </section>
           
        
    <style jsx>{`
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