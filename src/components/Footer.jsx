import React from 'react';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>CheesyBites</h1>
          <p className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad est consequuntur animi.
          </p>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
          <div className='flex flex-col gap-2'>
            <Link
              to="speciality"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
              Speciality
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
              Review
            </Link>
          </div>
        </div>
        <div className='font-medium text-xl pb-4 pt-5 md:pt-0'>
          <h1 className='flex flex-col gap-2'>Menu</h1>
          <div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
              Menu
            </Link>
          </div>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
          <div className='flex flex-col gap-2'>
            <a href="mailto:basitnexisoft@gmail.com">basitnexisoft@gmail.com</a>
            <a href="tel:+92316920748">+92 316 920 748</a>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}>
              Social media
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className='text-center py-4'>
          © Developed by <span className='text-yellow-500'>Basit Programmers</span> | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
