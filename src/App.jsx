import React from 'react'
import Home from './pages/Home'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Work from './pages/Work'
import Playreels from './pages/Playreels'
import Images from './pages/Images'
import Spread from './pages/Spread'
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full relative '>
      <Home />
      <Navbar />
      <Work />
      <Playreels />
      <Images />
      <Spread />
    </div>
  )
}

export default App