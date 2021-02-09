// Library and module imports
import React from 'react'

// Component imports
import NavMenu from '../nav-menu'

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">

              <a href="#" className="logo">
                <img src="assets/images/logo-rect.png" alt="DSK Motorcycle Training" />
              </a>

              <NavMenu />
              
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>

            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header