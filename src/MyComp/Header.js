import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// props is used to inherit values from parent class to childclass 

//here we have made use of terniary operator props.var ? true condition : false condition 

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container-fluid'>
        <Link className='navbar-brand' to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>  
            </ul>
        



         
                  
          {props.searchBar ? 
          <Form className="d-flex">
          
          <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
            <Button variant="outline-success">Search</Button>
          </Form> 
          : ""}
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
    title : "Your title here"
}

Header.propTypes = {
    title : PropTypes.string
}