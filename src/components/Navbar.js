import React from 'react'
import logo from '../prof.jpeg';
import {Link} from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
  <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link smooth={true} to="home" offset={-80} class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link smooth={true} to="about" offset={-80} class="nav-link" href="#">about me</Link>
      </li>
      <li class="nav-item">
        <Link smooth={true} to="services" offset={-80} class="nav-link" href="#">services</Link>
      </li>
      <li class="nav-item">
        <Link smooth={true} to="experience" offset={-80} class="nav-link" href="#">experience</Link>
      </li>
      <li class="nav-item">
        <Link smooth={true} to="portfolio" offset={-80} class="nav-link" href="#">portfolio</Link>
      </li>
      <li class="nav-item">
        <Link smooth={true} to="contacts" offset={-80} class="nav-link" href="#">contacts</Link>
      </li>
     </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
