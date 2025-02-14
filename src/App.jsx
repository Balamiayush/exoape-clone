import React from 'react'
import Home from './pages/Home'
import Lenis from 'lenis'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import ScrollTrigger from 'gsap/ScrollTrigger'
const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
  return (
    <div className='relative w-full '>
      <Home />
      <Navbar />
    </div>
  )
}

export default App