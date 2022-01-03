import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

function layout(Props) {
    return (
        <div>
            <Header/>
            <div className='theme-content' >
                {Props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default layout
