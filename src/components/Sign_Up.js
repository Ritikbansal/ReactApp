import React,{useState} from 'react';
import RandomColor from './RandomColor';
export default function Sign_In(){
	const [count, setCount] = useState(true);
   const [count1, setCount1] = useState(true);
   const [fcount, setFCount] = useState(true);
   const [lcount, setLCount] = useState(true);
   const error ={
	   f:"enter a valid first name",
	   l:"enter a valid last name",
	   
      email : "Enter a valid email",
      password : "Enter a valid Password"
   }
   const onBlur=(e)=>{
      const {type,value}=e.target;
      console.log("{Blur}")
      switch(type)
      {
         case "email":{
            if(String(value).length==0)
            {
               return setCount(false);
            }
         
         }
         case "password" :{
            if(String(value).length==0)
            {
               return setCount(false);
            }
         
         } 
      }
   }
   const onChange=(e)=>{
      const {type,value,name}=e.target;
      console.log(e.target)
	  switch(name)
	  {
		  case "fname": {
			if(String(value).length<3)
            {
               return setFCount(true);
            } return setFCount(false);
		  }
		  case "lname":{
			if(String(value).length<3)
            {
               return setLCount(true);
            } return setLCount(false);
		  }
	  }
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
         case "password" :{
            if(String(value).length==0)
            {
               return setCount(false);
            }
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(value))
            {
               return setCount1(false);
            }   else setCount1(true);
         } 
      }
      
   }
    return (
        
        <>
         <style>{'body{background:'+RandomColor()+'}'}</style>
           <div class="container" style={{"margin-bottom":"21px"}}>
<br/>  <h2 style={{"text-align":"center"}}>JOIN US NOW</h2>
<hr/>


<div class="row justify-content-center">
<div class="col-md-6">
<div class="card">
<header class="card-header">
	<a href="/sign-in" class="float-right btn btn-outline-primary mt-1">Log in</a>
	<h4 class="card-title mt-2">Sign up</h4>
</header>
<article class="card-body">
<form>
	<div class="form-row">
		<div class="col form-group">
			<label>First name </label>   
		  	<input type="text" onChange={onChange} name="fname" class="form-control" placeholder=""/>
			  <p>{fcount&&error.f}</p>
		</div> 
		<div class="col form-group">
			<label>Last name</label>
		  	<input type="text" onChange={onChange} name="lname" class="form-control" placeholder=" "/>
			  <p>{lcount&&error.l}</p>
		</div> 
	</div> 
	<div class="form-group">
		<label>Email address</label>
		<input type="email" onChange={onChange} class="form-control" placeholder=""/>
		<p>{count&&error.email}</p>
		<small class="form-text text-muted">We'll never share your email with anyone else.</small>
	</div> 
	<div class="form-group">
			<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value="option1"/>
		  <span class="form-check-label"> Male </span>
		</label>
		<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value="option2"/>
		  <span class="form-check-label"> Female</span>
		</label>
	</div> 
	<div class="form-row">
		<div class="form-group col-md-6">
		  <label>City</label>
		  <input type="text" class="form-control"/>
		</div> 
		<div class="form-group col-md-6">
		  <label>Country</label>
		  <select id="inputState" class="form-control">
		    <option> Choose...</option>
		      <option>Uzbekistan</option>
		      <option>Russia</option>
		      <option selected="">United States</option>
		      <option>India</option>
		      <option>Afganistan</option>
		  </select>
		</div> 
	</div> 
	<div class="form-group">
		<label>Create password</label>
	    <input class="form-control" onChange={onChange} type="password"/>
		<p>{count1&&error.password}</p>
	</div>   
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Register  </button>
    </div>       
    <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small>                                          
</form>
</article> 
<div class="border-top card-body text-center">Have an account? <a href="/sign-in">Log In</a></div>
</div> 
</div> 

</div> 


</div> 
        </>
    )
}