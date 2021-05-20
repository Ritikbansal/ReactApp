import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as B from 'react-bootstrap'
import { Button } from '@material-ui/core';
import * as laptop from './images/laptop.png'
export default function CantFind(){
    return (<>
    <div class="row" style={{"background-color":"green","padding":"20px"}}>
        <div class="col-3"></div>
        <div class="col-6 my-auto">
        <div class="d-flex justify-content-center">
        <h3 class="mr-2">Can't find what you are looking for?&nbsp;</h3>
        <button type="button" style={{"color":"black"}} class="ml-3 btn btn-outline-secondary">Submit Request</button>
      </div>
        </div><div class="col-3"></div>
   </div> </>
        );
}