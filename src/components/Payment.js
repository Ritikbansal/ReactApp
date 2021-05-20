import RandomColor from './RandomColor';
export default function Payment(){
    return (

<div class="container">
<style>{'body{background:'+RandomColor()+'}'}</style>
<div class="container">
<br/>  <p class="text-center"><h1><span style={{"border-radius":"4%"}} class="badge badge-warning">Payment</span></h1></p>
<hr/>

<div class="row">
	<div class="col"></div>
	<div class="col-xm-3 col-sm-12 col-lg-10 col-xl-12">


<article class="card">
<div class="card-body p-5">

<ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
		<i class="fa fa-credit-card"></i> Credit Card</a></li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
		<i class="fab fa-paypal"></i>  Paypal</a></li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
		<i class="fa fa-university"></i>  Bank Transfer</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane fade show active" id="nav-tab-card">
	<p class="alert alert-success">Payment Details will Not be saved due to Insecure connection</p>
	<form role="form">
	<div class="form-group">
		<label for="username">Full name (on the card)</label>
		<input type="text" class="form-control" name="username" placeholder="" required=""/>
	</div> 

	<div class="form-group">
		<label for="cardNumber">Card number</label>
		<div class="input-group">
			<input type="text" class="form-control" name="cardNumber" placeholder=""/>
			<div class="input-group-append">
				<span class="input-group-text text-muted">
					<i class="fab fa-cc-visa"></i>   <i class="fab fa-cc-amex"></i>   
					<i class="fab fa-cc-mastercard"></i> 
				</span>
			</div>
		</div>
	</div> 

	<div class="row">
	    <div class="col-sm-8">
	        <div class="form-group">
	            <label><span class="hidden-xs">Expiration</span> </label>
	        	<div class="input-group">
	        		<input type="number" class="form-control" placeholder="MM" name=""/>
		            <input type="number" class="form-control" placeholder="YY" name=""/>
	        	</div>
	        </div>
	    </div>
	    <div class="col-sm-4">
	        <div class="form-group">
	            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
	            <input type="number" class="form-control" required=""/>
	        </div> 
	    </div>
	</div> 
	<a href="/thank-you" class="subscribe btn btn-primary btn-block" type="button"> Confirm  </a>
	</form>
</div> 
<div class="tab-pane fade" id="nav-tab-paypal">
<p>Paypal is easiest way to pay online</p>
<p>
<button type="button" class="btn btn-primary"> <i class="fab fa-paypal"></i> Log in my Paypal </button>
</p>
<p><strong>Note:</strong> Payment Gateway Charges May apply. </p>
</div>
<div class="tab-pane fade" id="nav-tab-bank">
<p>Bank Account details</p>
<dl class="param">
  <dt><span style={{"border-radius":"4%"}} class="badge badge-warning">BANK: </span> </dt>
  <dd><span style={{"border-radius":"4%"}} class="badge badge-warning">SBI BANK</span></dd>
</dl>
<dl class="param">
  <dt><span style={{"border-radius":"4%"}} class="badge badge-warning">Account number: </span></dt>
  <dd><span style={{"border-radius":"4%"}} class="badge badge-warning">37303843076</span></dd>
</dl>
<dl class="param">
  <dt><span style={{"border-radius":"4%"}} class="badge badge-warning">IFSC: </span></dt>
  <dd><span style={{"border-radius":"4%"}} class="badge badge-warning"> SBIN0003541</span></dd>
</dl>
<p><strong>Note:</strong>Payment Gateway Charges May apply. </p>
</div> 
</div> 

</div> 
</article> 


	</div> 
    <div class="col">

    </div>
</div> 

</div> 
</div>
    )
}