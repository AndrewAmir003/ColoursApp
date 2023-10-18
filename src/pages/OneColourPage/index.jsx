import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import React from 'react'

function OneColour() {
    const { name } = useParams()

  useEffect(() => {
    fetchColours()
  }, [])

  const [colour, setColour] = useState({});

  const fetchColours = async () => {
    const response = await fetch(`https://www.csscolorsapi.com/api/colors/${name}`);
    const colourData = await response.json()
    console.log(colourData.data)
    setColour(colourData.data)
  }

  return (
    <>
    <div style={{ backgroundColor: `#${colour.hex}` }} > 
    <h1>{colour.name}</h1>
    </div>
    </>
  )
}

export default OneColour
