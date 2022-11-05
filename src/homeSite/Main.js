import React from 'react';
import workTv from '../images/work-tv.png';


const Main = () => {
    return (
        <section>
  <div class="container pb-5">
        <div class="row">
            <div class="col-12 col-lg-6 mx-auto text-center text-lg-start">
                <div class="col-md-8 col-lg-10 mx-auto mx-lg-0 pt-lg-5 pb-4">
                <h2 class="mb-3 fs-1 fw-bold" contenteditable="false">
                    <span contenteditable="false">Here at</span>
                    <span class="text-primary" contenteditable="false"> Simple Sites </span>
                    <span contenteditable="false">we make websites for our customers.</span>
                </h2>
                <p class="pe-lg-5 text-muted lh-lg mb-0" contenteditable="false">Making a website can be an overwhelming task, Simple Sites does all the heavy lifting for you. Our pre-made templates give you a step by step approach to provide you with the best website for your needs.</p>
                </div>
                <div>
                <a class="me-2 btn btn-primary" href="https://www.w3schools.com">FAQ</a>
                <a class="btn btn-outline-primary" href="https://www.w3schools.com" >Example Sites</a>
                </div>
            </div>
            <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                <div>
                <img class="img-fluid" src={workTv} alt="" />
                </div>
            </div>
            </div>
        </div>
        <div class="d-none fixed-top top-0 bottom-0" id="sideMenuHeaders07">
        <div class="position-absolute top-0 end-0 bottom-0 start-0 bg-dark" style={{opacity: "0.7"}}></div>
            <nav class="navbar navbar-light position-absolute top-0 bottom-0 start-0 w-75 pt-3 pb-4 px-4 bg-white" style={{overflowy: 'auto'}}>
                <div class="d-flex flex-column w-100 h-100">
                <div class="d-flex justify-content-between mb-4">
                    <a href="https://www.w3schools.com">
                    <img class="img-fluid" src="metis-assets/logos/metis/metis.svg" alt="" width="106" />
                    </a>
                    <button class="btn-close" type="button" data-toggle="side-menu" data-target="#sideMenuHeaders07" aria-controls="sideMenuHeaders07" aria-label="Close"></button>
                </div>
                <div>
                    <ul class="navbar-nav mb-4">
                    <li class="nav-item"><a class="nav-link" href="https://www.w3schools.com">Product</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://www.w3schools.com">Company</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://www.w3schools.com">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://www.w3schools.com">Features</a></li>
                    </ul>
                    <div class="border-top pt-4 mb-5">
                    <a class="btn btn-outline-primary w-100 mb-2" href="https://www.w3schools.com">Log in</a>
                    <a class="btn btn-primary w-100" href="https://www.w3schools.com">Sign up</a>
                    </div>
                </div>
                <div class="mt-auto">
                    <p>
                    <span>Get in Touch</span>
                    <a href="https://www.w3schools.com">info@example.com</a>
                    </p>
                    <a class="me-2" href="https://www.w3schools.com">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                    </a>
                    <a class="me-2" href="https://www.w3schools.com">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                    </a>
                    <a class="me-2" href="https://www.w3schools.com">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                    </a>
                </div>
                </div>
            </nav>
        </div>
    </section>
    );
};

export default Main;