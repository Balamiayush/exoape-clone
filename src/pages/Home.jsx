import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='w-full h-[200vh] relative'>
    <div className='w-full h-full bg-cover absolute z-[-1]' style={{backgroundImage: `url('https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)')`}}/>
    <Navbar />
    </div>
  )
}

export default Home