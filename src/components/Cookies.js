import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as B from 'react-bootstrap'
export default function Cookies() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>By closing this message, you consent to TIDAL’s use of cookies on this device in accordance with its cookies policy, unless you have disabled them through your browser settings
      </strong> 
  <button type="button" class="close btn btn-warning" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      );
    }
    return <></>;
   
  }
  
 