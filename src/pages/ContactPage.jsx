import React from 'react'
import { useSelector } from 'react-redux'

const ContactPage = () => {
  const message = useSelector((state) => state.sample.message);
  return (
    <div>
      <p>this is the contact page</p>
      <p>{message}</p>
    </div>
  )
}

export default ContactPage
