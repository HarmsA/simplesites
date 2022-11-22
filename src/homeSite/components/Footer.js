import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import linkedin from './linkedin.js';


const Footer = () => {
    return (
        <footer class="py-3"><div class="container">
  <div class="d-flex justify-content-center align-items-center flex-column">
    <h5 class="mb-3"><a href="#">Simple Sites</a></h5>
    <div class="d-flex mb-3">
      <a href="www.linkedin.com/in/adam-harms">
        {/* <img src="placeholder/icons/linkedin-in.svg" alt="" /> */}
        {/* <i class="linkedin"></i> */}
        {/* <FontAwesomeIcon icon={solid('linkedin')} /> */}
        {/* <FontAwesomeIcon icon={coffee} /> */}
        <FontAwesomeIcon icon="fa-solid fa-linkedin-in" />
        <FontAwesomeIcon icon={faCoffee} />
        </a>

    </div>
    <div class="d-flex">
      <p class="mb-0 small text-muted">© 2022 Simple Sites. </p>
    </div>
  </div>
  </div>
</footer>
    );
};

export default Footer;