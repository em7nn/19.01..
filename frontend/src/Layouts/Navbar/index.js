import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function Navbar() {
  return (
   <>
   <div className='wies'>
    <div className='flo'>
        <Link className='stil' to="/">products</Link>
        <Link className='stil' to="/addpage">add page</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar