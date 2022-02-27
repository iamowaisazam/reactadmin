import React from 'react'

function Loader(Props) {

    const {width,height} = Props;

    return (<>

            <div className='bg-primary-base loading-screen-bg' >
                <div className="my-auto container">
                    <div className="row loader-row align-items-center ">
                        <div className="col-12 mx-auto text-center ">
                           <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

    <style jsx>{`
           
            .loading-screen-bg{
                width:100%;
                min-height:100vh;
                border:1px solid;
                position: fixed;
                z-index: 1;

            }


            .loader-row{
                min-height:100vh;  
            }

            .spinner-border{
                 width:10rem;
                 height:10rem;
            }

            @media screen and (max-width: 300px) {
                .spinner-border{
                    width:5rem;
                    height:5rem;
               }
            }

    `}</style>
    </>)
}

export default Loader
