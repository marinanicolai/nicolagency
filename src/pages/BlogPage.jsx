import React from 'react'
import { useSelector } from 'react-redux'

const BlogPage = () => {
  const message = useSelector((state) => state.sample.message);
  return (
    <div>
      <p>this is the blogpage</p>
      <p>{message}</p>
    </div>
  )
}

export default BlogPage
