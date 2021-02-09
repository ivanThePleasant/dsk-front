import React, { Component } from 'react'

export default class NavMenu extends Component {

  render() {
    
    return(
      <ul className="nav">
        <li><a href="#welcome" className="active">Home</a></li>
        <li><a href="#features">About</a></li>
        <li><a href="#work-process">Work Process</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    )
  }

}