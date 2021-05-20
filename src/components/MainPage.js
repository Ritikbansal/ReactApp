import Val from "./Val";
import GiftCard from "./Giftcard";
import WhatsNew from "./WhatsNew";
import MusicCard from "./MusicCard";


function MainPage({obj}) {
  const random = Math.floor(Math.random() * obj.length);
  const element=obj[random];
  return ( <>
    <style>{'body{background:cyan;}'}</style>
   <div class="container">
   
  <div class="row align-items-center justify-content-center" style={{"margin-top":"4%","height":"100vh"}}>
    <div class="col-sm-3" >
      
    </div>
    <div class="col-sm-6 text-center align-items-center justify-content-center">
    <h3 >WELCOME TO </h3>
    <h1 class="display-1">
        RITIK.CF
      </h1>
      <h3>YOUR NEW MUSIC POINT </h3>
      <h3>What are you waiting for?</h3>
      <button class="btn btn-outline-success mx-3"> GET STARTED</button>
      <button class="btn btn-outline-success mx-3"  >
          WATCH DEMO <i class='far fa-play-circle' style={{"margin-left": "4px"}}/>
      </button>
        </div>
    <div class="col-sm-3">
      
    </div>
  </div>
  <div class="row align-items-center justify-content-center" style={{"margin-top":"4%","height":"auto"}}>
    <div class="col-sm-3" >
      
    </div>
    <div class="col-sm-6 text-center align-items-center justify-content-center">
    
    </div>
    <div class="col-sm-3">
      
    </div>
  </div> 
  
   </div>
   <div class="" style={{"marginLeft":"50%"}}>
       
   
     
      
     </div>
    </>
  );
}

export default MainPage;
