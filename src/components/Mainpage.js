import React from 'react'
import Navbar from './Navbar'
import Navpage from './Navpage'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

const Mainpage = () => {
  return (

    <React.Fragment>
      <ScrollToTop/>
        <section className=' font-satoshi'>
            <div>
              <Navbar/>
            </div>
            <div>
              <Navpage/>
            </div>
            <div>
              <Footer/>
            </div>

        </section>

    </React.Fragment>
  )
}

export default Mainpage
