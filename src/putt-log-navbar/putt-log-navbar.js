import React from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Animation } from 'mdbreact'
import plLogo from '../resources/images/pl-logo.png'

/**
 * Renders the navigation menu
 * For smaller screens, the hamburger icon appears
 */
class PuttLogNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isCollapsed: false
    }

    this.onHamburgerClick = this.onHamburgerClick.bind(this)
  }

  onHamburgerClick () {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render () {
    return (
      <header className='header-container'>
        <Navbar dark color='stylish-color-dark' expand='md' scrolling>
          <NavbarBrand href={process.env.PUBLIC_URL + '/#'}>
            <div className='d-inline-flex flex-row align-items-center'>
              <Animation type='rollIn'>
                <img src='https://res.cloudinary.com/joeschmoe1/image/upload/f_auto,q_auto/v1541266582/putting-logbook/pl-logo.png' alt='logo' height='30' className='m-1' />
              </Animation>
              <strong className='nav-title'>Putting Logbook</strong>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.onHamburgerClick} />
          <Collapse isOpen={this.state.isCollapsed} navbar>
            <NavbarNav right>
              <NavItem>
                <NavLink className='nav-link mx-2 pl-4' to={process.env.PUBLIC_URL + '/about'}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link mx-2 pl-4' to={process.env.PUBLIC_URL + '/log'}>Log</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link mx-2 pl-4' to={process.env.PUBLIC_URL + '/results'}>Results</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default PuttLogNavbar
