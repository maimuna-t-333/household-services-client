import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2017/09/19/22/10/tool-2766835_1280.jpg)",
      }}
    >
      <div className="hero-overlay  bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Your Home, Our Priority</h1>
          <p className="mb-5">
            Book trusted professionals for repairs, cleaning, and home services — all in one place.
            From AC repair to deep cleaning, Fixify makes your household tasks easier, faster, and stress-free.
          </p>
          <button className="btn btn-outline">Book a Service</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;



