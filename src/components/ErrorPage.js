import RandomColor from './RandomColor';
export default function ErrorPage() {
return(<>
    <div class="container error-container">
    <style>{'body{background:'+RandomColor()+'}'}</style>
    <style>{'body{background:linear-gradient(to right, #00c3ff, #ffff1c);}'}</style>
   
	<div class="row  d-flex align-items-center justify-content-center" style={{"margin":"5%"}}>
		<div class="col-md-12 text-center">
			<h1 class="big-text">Oops!</h1>
			<h2 class="small-text">404 - PAGE NOT FOUND</h2>

		</div>
		<div class="col-md-6  text-center">
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>


			
				
					<input type="text" style={{"display":"inline-block"}} class="form-control" placeholder="Search.." name="search"/>
                  <h3> <span class="badge badge-warning"><i class="fa fa-search"></i></span>	
				</h3> 

			
			 <h2 class="small-text">OR</h2>
			<span class="badge badge-warning">
			<a href="/home" class="button button-dark-blue iq-mt-15 text-center">GOTO HOME PAGE</a>
            </span>
		</div>

	</div>


</div>
</>
)
}