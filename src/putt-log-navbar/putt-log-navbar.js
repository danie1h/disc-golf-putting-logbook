import React from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Animation } from 'mdbreact'
import plLogo from '../resources/images/pl-logo.png'

export const PuttLogNavbar = () => {
  return (
    <header className='header-container'>
      <Navbar dark color='stylish-color-dark' expand='md' scrolling>
        <NavbarBrand href={process.env.PUBLIC_URL + '/#'}>
          <div className='d-inline-flex flex-row align-items-center'>
            <Animation type='rollIn'>
              <img src={plLogo} alt='logo' height='25' className='m-1' />
            </Animation>
            <strong>Putting Logbook</strong>
          </div>
        </NavbarBrand>
        <NavbarNav right>
          <NavItem>
            <NavLink className='nav-link mx-2' to={process.env.PUBLIC_URL + '/about'}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link mx-2' to={process.env.PUBLIC_URL + '/log'}>Log</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link mx-2' to={process.env.PUBLIC_URL + '/results'}>Results</NavLink>
          </NavItem>
        </NavbarNav>
      </Navbar>
    </header>
  )
}
