import React from 'react';

import { Link } from 'react-router';


const Hero = () => {
    return (
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
       <h1 className="mb-3 text-4xl font-bold" >Welcome</h1>
       <h1 className="text-xl">to</h1>
      <h1 className="mb-5 text-5xl font-bold"> <span className='mt-5'>RobinJrShop</span></h1>
      <p classN="mb-5">
       Your trusted destination for trendy products, smart deals, and everyday shopping essentials.
      </p>
     <div className="">
       <Link to="/login" className="btn btn-primary mt-4">
         Get Started
       </Link>
     </div>
    </div>
  </div>
</div>
    );
};

export default Hero;