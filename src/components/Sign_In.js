import React,{useState} from 'react';
import RandomColor from './RandomColor';
export default function Sign_In(){
   const [count, setCount] = useState(true);
   const [count1, setCount1] = useState(true);
   const error ={
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
      const {type,value}=e.target;
      console.log(value)
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
        <div class="container">
        <div class="row">
			<div class="col-md-5 mx-auto">
			<div id="first">
				<div class="myform form ">
					 <div class="logo mb-3">
						 <div class="col-md-12 text-center">
							<h1>Login</h1>
						 </div>
					</div>
                   <form action="" method="post" name="login">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" onChange={onBlur} onChange={onChange} name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                           <p>{count&&error.email}</p>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" onBlur={onBlur} onChange={onChange} name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           <p>{count1&&error.password}</p>
                           </div>
                           <div class="form-group">
                              <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 
                                 
                              </div>
                           </div>
                           <div class="col-md-12 mb-3">
                              
                           </div>
                           <div class="form-group" style={{"padding":"10px"}}>
                              <p class="text-center">Don't have account? <a href="/sign-up" id="signup">Sign up here</a></p>
                           </div>
                        </form>
                 
				</div>
			</div>
			  
		</div>
      </div>   </div>   
        </>
    )
}