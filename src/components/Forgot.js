import React,{useState} from 'react';
import RandomColor from './RandomColor';
export default function Forgot(){
	const [count,setCount] = useState(true);
	const onChange=(e)=>{
		const {type,value,name}=e.target;
		console.log(e.target)
		
		switch(type)
		{
		   
		    case "email":{
				if(String(value).length==0)
				{
				   return setCount(false);
				}
				if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(value))
				{
				  return setCount(false);
				}
				else setCount(true);
			 }
		}}
    return (
        <div class="container padding-bottom-3x mb-2 mt-5" style={{"padding-bottom":"21px"}}>
	       <style>{'body{background:'+RandomColor()+'}'}</style>
    
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
	                    <div class="form-group"> <label for="email-for-pass">Enter your email address</label> <input class="form-control" onChange={onChange} type="email" id="email-for-pass" required=""/>
						<p>{count&&"Enter a valid email"}</p>
						<small class="form-text text-muted">Enter the email address you used during the registration on <a href="/" class="btn btn-sm btn-outline-light" style={{"color":"black","padding":"0"}}>ritik.cf</a>  Then we'll email a link to this address.</small> </div>
	                </div>
	                <div class="card-footer"> <button class="btn btn-success" type="submit">Get New Password</button> <button class="btn btn-danger" type="submit">Back to Login</button> </div>
	            </form>
	        </div>
	    </div>
	</div>
    );
}