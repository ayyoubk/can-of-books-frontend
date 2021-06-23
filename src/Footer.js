import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='footer'>
      <Navbar.Brand>&copy; Best Books</Navbar.Brand>
    </Navbar>
    )
  }
}

export default Footer;
