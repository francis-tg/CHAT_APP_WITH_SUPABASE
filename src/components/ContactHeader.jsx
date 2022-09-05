import React from 'react'
import {
    IoEllipsisVertical
  } from "react-icons/io5"
function ContactHeader({username}) {
  return (
    <div className="contact-header">
    <div className="display-name">{username}</div>
    <IoEllipsisVertical  size={25}/>
  </div>
  )
}

export default ContactHeader