import React from 'react'

const NavBar = () => {
    return (
        
        <div>
<nav class="navbar navbar-expand-lg p-3 mb-2 bg-secondary ">
  <a class="navbar-brand text-white" href="#">Lamara Brown</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
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
    </ul>
  </div>
</nav>
        </div>
    )
}

export default NavBar
