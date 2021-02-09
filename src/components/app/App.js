// Library and module imports
import React, { Component } from 'react'

// Component imports
import Header from '../header'
import WelcomeArea from '../welcome-area'
import AboutArea from '../about-area'
import ProcessArea from '../process'
import Gallery from '../gallery'
import Testimonials from '../testimonials'
import Contact from '../contact'
import Footer from '../footer'



export default class App extends Component {



  render() {
    return (
      <React.Fragment>  
    
        <Header />
    
        <WelcomeArea />
    
        <AboutArea />

        <ProcessArea />

        <Gallery />

        <Testimonials />

        <Contact />

        <Footer />
    
      </React.Fragment>
    )
  }
}