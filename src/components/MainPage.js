import MusicCard from "./MusicCard";


function MainPage() {
  return ( <>
    <style>{'body{background:cyan;}'}</style>
   <div classNameName="container">
   
  <div className="row align-items-center justify-content-center" style={{"margin-top":"4%","height":"100vh"}}>
    <div className="col-sm-3" >
      
    </div>
    <div className="col-sm-6 text-center align-items-center justify-content-center">
    <h3 >WELCOME TO </h3>
    <h1 class="display-1">
        RITIK.CF
      </h1>
      <h3>YOUR NEW MUSIC POINT </h3>
      <h3>What are you waiting for?</h3>
      <button className="btn btn-outline-success mx-3"> GET STARTED</button>
      <button className="btn btn-outline-success mx-3"  >
          WATCH DEMO <i className='far fa-play-circle' style={{"margin-left": "4px"}}/>
      </button>
        </div>
    <div className="col-sm-3">
      
    </div>
  </div>
  <div className="row align-items-center justify-content-center" style={{"margin-top":"4%","height":"auto"}}>
    <div className="col-sm-3" >
      
    </div>
    <div className="col-sm-6 text-center align-items-center justify-content-center">
    
    </div>
    <div className="col-sm-3">
      
    </div>
  </div>
   </div>
   
    </>
  );
}

export default MainPage;
