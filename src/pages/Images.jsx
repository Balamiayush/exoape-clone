import { Linear } from 'gsap';
import gsap, {ScrollTrigger, Power4} from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Images = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
       scrollTrigger:{
        trigger: parent.current,
        start: "0 90%",
        scrub: 1
       }
    });

    tl.to(first.current, {
      x: "40%",
      ease: Linear
    }, 'a')
    tl.to(second.current, {
      x: "-40%",
      ease: Linear
    }, 'a')
    tl.to(third.current, {
      x: "-40%",
      ease: Linear
    }, 'a')
    tl.to(fourth.current, {
      x: "40%",
      ease: Linear
    }, 'a')

      
})

  return (
    <div ref={parent} className='w-full md:h-[100vh] h-[70vh] bg-white flex items-center justify-center overflow-hidden'>
       <div className='w-[40%] md:w-[25%] md:h-[85%] h-1/2 relative'>
         <div ref={first} className='w-20 h-[7rem] md:w-[14rem] md:h-[15rem] -right-1/3 top-6  absolute'>
           <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)" alt="" />
         </div>
         <div className='absolute md:w-[22rem] w-[8rem] aspect-video md:-left-2/3 -left-1/2 top-1/3 overflow-hidden'>
            <video ref={second} autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
         </div>
         <div ref={third} className='absolute md:w-[20rem] w-[9rem] aspect-video -left-[70%] -bottom-10 bg-red-400'>
           <img className='h-full w-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
         </div>
         <div className='absolute w-[7rem] aspect-[1.5/1] md:-right-[50%] md:w-[20rem] -right-[70%] -bottom-[33%] md:-bottom-[20%] '>
           <video ref={fourth} autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
         </div>

         <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(webp):quality(70)" alt="" />
       </div>
    </div>
  )
}

export default Images