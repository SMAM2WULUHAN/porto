import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { TypewriterEffect } from './ui/Typewriter'; 

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      
      <div className="flex flex-col items-center">
        <TypewriterEffect
          words={[
            { text: 'Ready' },
            { text: 'to' },
            { text: 'take' },
            { text: 'your' },
            { text: 'digital' },
            { text: 'presence' },
            { text: 'to' },
            { text: 'the' },
            { text: 'next' },
            { text: 'level' },
            { text: '?' },
          ]}
          
          className="heading lg:max-w-[45vw] text-white text-center"
        />
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {"Reach out to me today and let's discuss how I can help you achieve your goals."}
        </p>
        <a
          href="https://wa.me/6285643571298?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20further?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white item-center">
          Copyright © 2024 | Rayhan Ibrahim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
