import React from 'react';
import img from "../assets/img/pizza.png";
import Button from '../layouts/Button';

const Hero = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      {/* Content section */}
      <div className="w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
        <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
            Authentic <span className="text-yellow-500">Pizzas</span> Timeless 
            Flavors
        </h1>
        <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Animi illum,
           <br /> exercitationem commodi.dcfjcf dkcuhr kswudeynde3d0r <br />edrf
            efruh edjdehfgr lkde4 detddeg7f.
        </p>
        <Button title="Read More" />
      </div>
      {/* Image section */}
      <div className="mt-14">
        <img 
             className='animate-spin-slow w-70 lg:w-105'
            src={img}
            alt="heroImg" 
        />
      </div>
    </div>
  );
};

export default Hero;
