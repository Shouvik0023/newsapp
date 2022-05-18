import React from 'react'

import "./Home.css"

import { useNavigate } from 'react-router-dom'

function Home() {

  let navigate= useNavigate();

  const handleclick =()=>{
    
     navigate("/general")
  }
  return (
    <div className='background'>
    
      <div className=" container paragraph">
             <p className='font'>Come here and read the latest news from all over the world from different categories. </p>
      </div>
      <button className='button' onClick={handleclick}><b>Read Latest News</b>  </button>
    </div>
  )
}

export default Home