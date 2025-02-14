import React from "react";
// import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="w-full h-[250vh] relative">
      <div className="w-full h-full img-container  absolute  z-[-1]  ">
        <img
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          className="
          lg:w-full lg:h-full  lg:object-top
          object-cover 
          w-[100vw] 
          sm:object-center
           "
          alt="Background"
        />
      </div>
      <div className="content absolute
      lg:top-[20%]
        max-w-screen-2xl mx-auto  px-5 sm:px-10 md:px-16 lg:px-24  text-white lg:py-20  ">
        <div className="text-[0.7rem] para sm:leading-4 sm:text-[1rem] mt-22 lg:text-[1.5rem] lg:leading-8  ">
          <p>Global design studio partnering with</p>
          <p>brands and businesses to create exceptional</p>
          <p>experiences where people live, work and unwind.</p>
        </div>
        <div className="heading leading-none mt-3 lg:mt-20 ">
          <h1 className="
          text-[3rem]
          lg:text-[12rem]
          font-semibold
          ">
            Digital <br /> 
            Design <br /> 
            Experience 
          </h1>
        </div>
        <div className="text-[0.8rem] para leading-4 opacity-50 sm:text-[1rem] mt-10 lg:text-[1.5rem] lg:leading-none">
        We help experience-driven companies thrive <br />
          by making their audience feel the refined <br />
          intricacies of their brand and product in the <br />
          digital space. Unforgettable journeys start <br />
          with a click.
        </div>
        
      </div>
    </div>
  );
};

export default Home;
