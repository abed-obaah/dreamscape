import { useState } from 'react'
import '../App.css'
import Header from '../components/header'
import HeroSection from '../components/heroSection'
import About from '../components/about'

// import { Routes, Route, Navigate,Link } from 'react-router-dom';

function Main() {
  

  return (
    <>
    <div className="bg-[#02081F]">
      <Header/>
      <HeroSection/>
      <About/>
    </div>
    </>
  )
}

export default Main
