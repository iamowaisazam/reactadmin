import React from 'react'

function Loader(Props) {

    const {width,height} = Props;

    return (<>

            <div >
                <div className="spinner-border" style={{width: width +'rem', height: height +'rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

    <style jsx>{`

          

          .spinner-border{
            position: absolute;
            top: 29%;
            left: 47%;
          }

    `}</style>
    </>)
}

export default Loader
