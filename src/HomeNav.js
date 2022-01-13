import React from 'react'

import {Link} from "react-router-dom"


const HomeNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    
    <Link data-aos="zoom-in-left" data-aos-delay="150" to="/" class="logo"> <i class="fas fa-paper-plane"></i>TRVL </Link>

    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       

      <li class="nav-item">
          <Link class="nav-link" to="/logonav">Home</Link>
        </li>

        {/* <li class="nav-item">
          <Link class="nav-link" to="/plantrip">Plan your trip</Link>
        </li> */}
        
        <li class="nav-item"> 
         < Link class="nav-link" to="/things">Things to do</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/plantrip">Plan your trip</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/event">Event Calender</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>

        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"
        style={{
            borderColor: "black",
            
             borderStyle: "solid",
            
            borderRadius: 3,
            marginLeft: 6,
          }}
        > <a href='/login'>SignUp</a></button>
      </form>
    </div>
  </div>
</nav>




        </div>
    )
}

export default HomeNav
