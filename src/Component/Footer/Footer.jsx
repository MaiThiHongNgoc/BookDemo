import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div><Link to = "/getall">GetAll</Link></div>
      <div><Link to = "/post">Post</Link></div>
      <div><Link to = "/update">Update</Link></div>
      <div><Link to = "/delete">Delete</Link></div>
      <div><Link to = "/search">Search</Link></div>
    </div>
  )
}

export default Footer;