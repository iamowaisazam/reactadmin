import React from 'react'

function footer() {
    return (
        <section className='bg-primary-base header py-3'>
          <div className="container">
              <div className="d-flex flex-row">
                    <div className="flex-fill align-self-center ">
                        <h3 className='copy-right font-montserrat text-primary-contrast font-bold mb-0' >© 2005-2011 John Doe All Rights Reserved</h3> 
                    </div>
              </div>
          </div>


        <style jsx>{`

                    .copy-right{
                        font-size:16px
                    }


            `}</style>
      </section>
    )
}

export default footer
