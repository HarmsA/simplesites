import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/SimpleSites-logo.png';

const Header = () => {

    
return (
<section>
  <div class="container pb-1">
    <nav class="position-relative navbar navbar-expand-lg navbar-light py-3 mb-3" id='nav'>
      <a class="navbar-brand" href="#nav">
        <img src={logo} alt="" width="200" contenteditable="false" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="side-menu" data-target="#sideMenuHeaders07" aria-controls="sideMenuHeaders07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav position-absolute top-50 start-50 translate-right">
        <li class="nav-item me-2"><a class="nav-link" href="#ThreeSteps">Product</a></li>
        <li class="nav-item me-2"><a class="nav-link" href="https://www.w3schools.com">Company</a></li>
        <li class="nav-item me-2"><a class="nav-link" href="https://www.w3schools.com">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="https://www.w3schools.com">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#contactUs">Contact Us</a></li>
        </ul>      
      </div>
    </nav>
    
</div>
</section>
);
};

export default Header;