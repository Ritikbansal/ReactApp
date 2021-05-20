import React from 'react';
import * as l from './laptop.png';
function Footer() {
  return (<>
    <div className='footer-container' style={{"margin-top":"-20px","padding":"30px","background":"linear-gradient(to right, #b3ffab, #12fff7)"}}>
      <div className="row" style={{"margin":"2%","padding":"2%"}}>
      
      <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">DISCOVER</h5>

        <p>
          MUSIC AT YOUR DESTINATION
        </p>
          <img src="http://wb.saccount.workers.dev/0:/laptop.png" style={{"height":"50%","width":"83%"}} alt="laptop" />
        <button type="button" style={{"color":"black"}} className="btn btn-lg btn-block btn-outline-warning">Start Free Trail Now</button> 
          
      </div>
      
      <div className="col-lg-3 col-md-12 mb-4 mb-md-0 align-center">
      <ul className="list-unstyled mb-0 ulsize">
          <li>
            <a href="#!" className="text-dark"><i class='fab fa-facebook-f' />FACEBOOK</a>
          </li>
          <li>
            <a href="#!" className="text-dark"><i class='fab fa-instagram' />INSTAGRAM</a>
          </li>
          <li>
            <a href="#!" className="text-dark"><i class='fab fa-youtube' />YOUTUBE</a>
          </li>
          <li>
            <a href="#!" className="text-dark"><i class='fab fa-twitter' />TWITTER</a>
          </li>
        </ul>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">MORE</h5>

        <ul className="list-unstyled mb-0 ulsize-small">
          <li>
            <a href="#!" className="text-dark">DOWNLOAD OUR APP</a>
          </li>
          <li>
            <a href="#!" className="text-dark">PlayList Import</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Supported Devices</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Get Support</a>
          </li>
        </ul>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0 text-bold ">ACCOUNT</h5>

        <ul className="list-unstyled ulsize-small">
          <li>
            <a href="/sign-in" className="text-dark">LOGIN</a>
          </li>
          <li>
            <a href="/sign-up" className="text-dark">SIGNUP</a>
          </li>
          <li>
            <a href="/forgot-password" className="text-dark">FORGOT PASSWORD</a>
          </li>
          <li>
            <a href="/sign-in" className="text-dark">MANAGE ACCOUNT</a>
          </li>
          <li>
            <a href="#!" className="text-dark">REDEEM GIFTCARD</a>
          </li>
        </ul>
      </div>
      
    </div>
    
  </div>
    <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a className="text-dark" href="https://ritik.cf/">RITIK.CF</a>
  </div>
    </>
  );
}

export default Footer;
