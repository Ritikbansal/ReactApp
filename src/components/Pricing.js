import './priceFooter.css';
import Footer from'./Footer.js';
import RandomColor from './RandomColor';
function Pricing()
{
    return ( <>
         
   <style>{'.pricing-header,.conatiner{ margin: 1% 10% 1% 10%;}'}</style>
   <style>{'body{background:'+RandomColor()+'}'}</style>
    <div id="div1"  className="pricing-header mt-4 py-3  pb-md-4 text-center" >
   <h1>   <span style={{"border-radius":"5%"}} className="badge badge-warning">Pricing</span>
     </h1><h3> <span class="badge badge-warning">It's free.
No credit card required.</span></h3>
    </div>

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free- Always Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ month</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>1 users included</li>
              <li>2 GB of Cloud storage</li>
              <li>Delayed Email support</li>
              <li>Help center access : Only Weekends</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <p className="lead"></p>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro-For Students</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ month</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>2 users included</li>
              <li>10 GB of Cloud storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-warning">Get started</button>
          </div>
        </div>
        <p className="lead"></p>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise-For Family</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ month</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>12 users included</li>
              <li>85 GB of storage</li>
              <li>Phone and email support: Garunteed Reply within an Hour</li>
              <li>Help center access 24/7</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Get Now</button>
           </div>
        </div>
      </div>

      
    </div>

    
  

  
  
  

</>
    );
}
export default Pricing;