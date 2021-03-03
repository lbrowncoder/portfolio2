import React from 'react';
import { Link, Element} from 'react-scroll';
import '../App.css';

const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg p-3 mb-2 bg-secondary fixed-top">
<div class="container">
  <a class="navbar-brand text-white" href="#">Lamara Brown</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    {/* <ul class="navbar-nav">
      <li class="nav-item active"> */}
        <li className='links'>
        <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
          Home
        </Link>
        </li>
        <li className='links'>
        <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
          work
        </Link>
        </li>
        <li className='links'>
        <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
          About
        </Link>
        </li>
        <li className='links'>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
          Contact
        </Link>
        </li>
        {/* <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Contact</a>
      </li>
    </ul> */}
  </div>
  </div>
</nav>

    )
}

export default NavBar
