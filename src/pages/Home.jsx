import { motion, stagger } from 'framer-motion'
import React from 'react'
import {Power4, Expo} from 'gsap/all'

const Landing = () => {
  
  return (
    <div className=' relative w-full h-[150vh] md:h-[250vh]'>
        <div className='picture w-full h-full overflow-hidden'>
            <img data-scroll data-scroll-speed="-1"
            className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
        </div>

         <div className='w-full absolute top-0'>

         <div className='h-full text max-w-screen-xl mx-auto px-5 md:px-10 text-white'>
            <div className='para mt-72 md:mt-[35rem] '>
               {["Global digital design studio partnering", "with brands and business that create", "exceptional experiences where people", "Live, Work, and Unwind"].map((item,index)=>{
                 return <p key={index} className='text-md font-regular md:text-3xl overflow-hidden'>
                          <motion.span 
                              initial={{rotate:90, y:"100%", opacity:0}} 
                              animate={{rotate: 0 , y: 0, opacity: 1, stagger: .1}}  
                              transition={{ease: [0.22, 1, 0.36, 1], duration:.8, delay:index*.2}} 
                              className='inline-block origin-left'>{item}
                          </motion.span>
               </p>
               })}
            </div>

            <div className='headings mt-5 md:mt-10'>
                {['Digitals', 'Design', 'Experience'].map((item, index)=>{
                  return <h1 key={index} className='text-[11vh] py-5 -mt-6 tracking-tighter leading-none md:text-[12rem] overflow-hidden'>
                        <motion.span 
                          initial={{rotate:90, y:"100%", opacity:0}} 
                          animate={{rotate: 0 , y: 0, opacity: 1, stagger: .1}}  
                          transition={{ease: [0.22, 1, 0.36, 1], duration:1, delay: 1 + index*.15}} 
                          className='inline-block origin-left'>{item}
                        </motion.span>
                    </h1>
                })}

                
                {/* <h1 className='text-[11vh] tracking-tighter leading-none md:text-[12rem]'>Design</h1>
                <h1 className='text-[11vh] tracking-tighter leading-none md:text-[12rem]'>Experience</h1> */}

            </div>

            <div className='para2 md:w-1/3 mt-10 md:mt-20 '>
                <p className='md:text-2xl'>
                     We help experience-driven companies thrive by making their audience feel 
                    the refined intricaties of their brand and product in the digital space.
                    Unforgettable journeys start with a click.
                </p>
                <a className=' md:text-xl border-b-[1px] border-zinc-100 pb-1 mt-4 inline-block' href="">The Studio.</a>
            </div>
         </div>

         </div>

        
    </div>
  )
}

export default Landing