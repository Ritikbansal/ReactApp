import './priceFooter.css';
import Footer from'./Footer.js';
function Pricing()
{
    return ( <>
         
   <style>{'.pricing-header,.conatiner{background:linear-gradient(to right, #34e89e, #0f3443); margin: 1% 10% 1% 10%;}'}</style>
    <div id="div1" className="pricing-header mt-4 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" style={{"background-color":"linear-gradient(to right, #34e89e, #0f3443)"}}>
      <h1 className="display-4">Pricing</h1>
      <p className="lead">It's free.
No credit card required.</p>
    </div>

    <div className="container" style={{"background-color":"linear-gradient(to right, #34e89e, #0f3443)"}}>
      <div className="card-deck mb-3 text-center" style={{"background-color":"linear-gradient(to right, #34e89e, #0f3443)"}}>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>1 users included</li>
              <li>2 GB of Cloud storage</li>
              <li>Delayed Email support</li>
              <li>Help center access : Only Weekends</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <p className="lead">For Students</p>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>2 users included</li>
              <li>10 GB of Cloud storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-warning">Get started</button>
          </div>
        </div>
        <p className="lead">For Family</p>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
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