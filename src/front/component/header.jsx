import react from 'react'
import { MdDehaze } from "react-icons/md";

function Header(){

    const [drop,SetDrop] = react.useState(false);
    const [menu,Setmenu] = react.useState(false);

    const handDrop = () => {
          if(drop == true){
            SetDrop(false);
          }else{
            SetDrop(true);
          }
    }

    const menuToggle = () => {
        if(menu == true){
          Setmenu(false);
        }else{
          Setmenu(true);
        }
    }

  return (<>

      <section className='bg-primary-base header py-3'>
          <div className="container">
              <div className="d-flex flex-row">
                    <div className="align-self-center ">
                        <h3 className='font-montserrat text-primary-contrast font-bold mb-0' >Bootslander</h3> 
                    </div>
                    <div className="flex-fill align-self-center  ">
                        <div className='d-none d-md-block text-end font-poppins ' >
                            <a className="text-primary-contrast p-2 hover:border-b-2" href="/" >Home</a>
                            <a className="text-primary-contrast p-2 hover:border-b-2" href="/about" >About</a>
                            <a className="text-primary-contrast p-2 hover:border-b-2" href="#" >Services</a>
                            <a className="text-primary-contrast p-2 hover:border-b-2" href="#" >Gallery</a>
                            <a className="text-primary-contrast p-2 hover:border-b-2" href="#" >Contact</a>
                        </div>
                        <div className="d-block d-md-none text-end font-poppins " >
                          <a className="m-0 p-0 menu-toggle-button text-primary-contrast" href="#" > Menu</a>
                        </div>
                    </div>
              </div>
          </div>
      </section>
           
        
    <style jsx>{`

      .menu-toggle-button{
        font-size: 20px;
      }

  


    `}</style>
  
   </>)
}
export default Header;