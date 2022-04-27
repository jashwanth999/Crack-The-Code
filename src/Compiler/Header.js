import React from 'react';
import {
  MDBNavbar,
 
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <header>
      <MDBNavbar expand='lg'  style={{backgroundColor:'rgb(0, 30, 60)',height:50}} sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
       
          
        </MDBContainer>
      </MDBNavbar>

    
    </header>
  );
}