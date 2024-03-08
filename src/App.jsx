import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/main'
import DetailsPage from './pages/DetailsPage'

import { Routes, Route, Navigate,Link } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Projects/:personName' element={<DetailsPage/>}/>
    </Routes>
      
      
    </>
  )
}

export default App
