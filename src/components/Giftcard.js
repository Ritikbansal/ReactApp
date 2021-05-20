import React from 'react';
import Quantity from './Quantity';
import Price from './Price';
import RandomColor from './RandomColor';
export default function GiftCard(){
    return(
<> 
<style>{'.card{box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);}.card:hover {box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);}body{background:'+RandomColor()+'}'}</style>


<div class="row">
    <div class="col"></div>
    <div  class="col justify-content-center align-items-center align-content-center">
    <div style={{"border":"2px dotted green"}} class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://ritik.ritikbansal.workers.dev/0:/pic/GiftCard.jpg"
      class="img-fluid"
    />
    <a href="#!">
      <div class="mask" style={{"background-color":" rgba(251, 251, 251, 0.15);"}}></div>
    </a>
  </div>
  <div style={{"padding":"2%","background":"cyan"}}>
    
    <div class="row">
     <div class="col"><h5 class="card-title">Quantity</h5>
      <Quantity/>
     </div>
     <div class="col"><h5 class="card-title">Select Amount </h5>
     <Price/>
     </div>
    </div>
    <a href="/payment" style={{"marginLeft":"30%","margin-top":"5%"}} class="btn btn-primary">Checkout</a>
  </div>
</div>
    </div>
    <div class="col"></div>
</div>
</>
    )
}