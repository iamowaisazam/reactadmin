import react from 'react'
import Layout from './component/layout'
import homeBanner from './asseets/images/home-banner.jpg'

function About() {
  


  return (<>
          <Layout>
      
            <div className="p-5 banner d-flex flex-column justify-content-center ">
            
                    <h3 className="font-montserrat banner__title">About Build Your Landing <br/> Page With </h3>
                    <p className="font-poppins  banner__des">We are team of talented designers making websites with Bootstrap</p>
                    <a className="font-poppins bg-primary-base btn btn-primary banner__btn">Get Started</a>
                
              
            </div>
      
          </Layout>    
        <style jsx>{`

            .banner{
              background-image: url(${homeBanner});
              background-size: cover;
              min-height:400px;
            }

            .banner__title{
              font-size:50px;
              color:white;
              
            }

            .banner__des{
              font-size:27px;
              color:white;
            }

            .banner__btn{
              max-width:130px;
              border:none;
              font-size: 17px;
            }

      





          `}</style>
      </>)
}

export default About