import Nav from './Nav';
import { Home, Colours, OneColour } from './pages';
import { Routes, Route } from 'react-router-dom'
import React from 'react';

function App() {
    return (
      <div className="App">
        <Nav />
        <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/colors' element={<Colours /> }/>
        <Route path='/colors/:name' element={<OneColour /> }/>
        </Routes>
      </div>
    )
}

export default App
