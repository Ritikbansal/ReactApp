import React from 'react';
export default function Forgot(){
    return (
        <div class="container padding-bottom-3x mb-2 mt-5" style={{"padding-bottom":"21px"}}>
	       <style>{'body{background:linear-gradient(0deg, rgba(253,187,45,1) 3%, rgba(253,187,45,1) 9%, rgba(83,192,161,1) 76%, rgba(34,193,195,1) 83%, rgba(34,193,195,1) 92%);}'}</style>
    
	    <div class="row justify-content-center">
	        <div class="col-lg-8 col-md-10">
	            <div class="forgot">
	                <h2>Forgot your password?</h2>
	                <p>Change your password in three easy steps. This will help you to secure your password!</p>
	                <ol class="list-unstyled">
	                    <li><span class="text-primary text-medium">1. </span>Enter your email address below.</li>
	                    <li><span class="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
	                    <li><span class="text-primary text-medium">3. </span>Use the link to reset your password</li>
	                </ol>
	            </div>
	            <form class="card mt-4">
	                <div class="card-body">
	                    <div class="form-group"> <label for="email-for-pass">Enter your email address</label> <input class="form-control" type="text" id="email-for-pass" required=""/><small class="form-text text-muted">Enter the email address you used during the registration on <a href="/" class="btn btn-sm btn-outline-light" style={{"color":"black","padding":"0"}}>ritik.cf</a>  Then we'll email a link to this address.</small> </div>
	                </div>
	                <div class="card-footer"> <button class="btn btn-success" type="submit">Get New Password</button> <button class="btn btn-danger" type="submit">Back to Login</button> </div>
	            </form>
	        </div>
	    </div>
	</div>
    );
};