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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus hic debitis consequatur atque beatae delectus ratione. Nobis molestiae accusantium quis iusto nesciunt obcaecati rerum est vero odit aliquam, magni expedita commodi dicta, labore repellendus! Voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eius, eligendi mollitia cupiditate laborum debitis magni labore, rem ad eos dolores aliquam velit eum? Repellat nostrum ad similique fugiat excepturi expedita porro veritatis, illo nihil quis modi!
      </div>
      <button className='button' onClick={handleclick}><b>Read Latest News</b>  </button>
    </div>
  )
}

export default Home