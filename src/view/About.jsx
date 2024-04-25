import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const About = () => {
  return (
    <div className='m-4'>
      click here go to home page
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white font-bold py-2 px-4 rounded ">Home</Link>
    </div>
  )
}

export default About
