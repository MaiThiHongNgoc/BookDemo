import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <h5>----- Libraries -----</h5>
      <div><Link to = "/getall">GetAll</Link></div>
      <div><Link to = "/post">Post</Link></div>
      <div><Link to = "/update">Update</Link></div>
      <div><Link to = "/delete">Delete</Link></div>
      <div><Link to = "/search">Search</Link></div>
      <h5>----- Book ----</h5>
      <div><Link to = "/getallbook">Get All Book</Link></div>
      <div><Link to = "/postbook">Post Book</Link></div>
    </div>
  )
}

export default Footer;