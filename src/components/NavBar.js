import React, { useRef,useState, useEffect } from 'react';
function NavBar({setVal}) {

   function  handleSubmit(e){
    console.log(e.target.value)
    setVal(e.target.value);
     }
  const fnc=()=>{

  }
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/"><i style={{"margin-left":"12%","margin-top":"12%"}} class="mt-2 fas fa-podcast fa-2x"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pricing">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ACCOUNT
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/sign-in">SIGNIN</a>
            <a class="dropdown-item" href="/sign-up">SIGNUP</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/forgot-password">FORGOT PASSWORD</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact-us">Contact Us</a>
        </li>
      
      
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>  </ul>
    </div>
  </nav>
      </>
    );
  }
  
  export default NavBar;
  