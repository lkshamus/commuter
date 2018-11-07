import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {
  return(
  <div>
    <h3>the page you are requesting is not found</h3>
    <Link to='/'><button className='error-btn'> go back home</button> </Link>
  </div>
  );
};

export default NotFound;