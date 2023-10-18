import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import React from 'react'

function Colours() {
  useEffect(() => {
    fetchColours()
  }, [])

  const [colour, setColour] = useState([]);
  console.log(colour)

  const fetchColours = async () => {
    const response = await fetch('https://www.csscolorsapi.com/api/colors');
    const colourData = await response.json()
    console.log(colourData.colors)
    setColour(colourData.colors)
  }

  return (
    <div>
      <h1>Colour Page</h1>
      <div>
        {colour.map((el) => (
          <p key={el.name}>
           <Link to={`/colors/${el.name}`}>{el.name}</Link> 
          </p>
        ))}
      </div>
    </div>
  )
}

export default Colours
