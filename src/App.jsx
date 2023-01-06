import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Place from './components/Place'
import data from './data'

export default function App() {
  const places = data.map( place => {
    return (
      <Place 
        key={place.id}
        // place={place}
        {...place}
      />
    )
  }
  
  )
  console.log(places)
  return (
    <div className='container'>
        <Nav />
        <div>
          {places}
         </div>

    </div>


  )
    
  }