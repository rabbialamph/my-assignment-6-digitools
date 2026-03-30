import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Footer = () => {
    return (
<div className='max-w-[1180px]  mx-auto bg-gray-900 rounded-t-2xl '>
<footer className="footer sm:footer-horizontal p-10">
  <aside>
    <div>
      <p className='text-3xl mb-4 text-white font-bold'>DigiTools</p>
     <p className='text-gray-200'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
    </div>
  </aside>
  <nav className='text-white'>
    <h6 className="footer-title">Product</h6>
    <div className='text-gray-300 flex flex-col'>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
    </div>

  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Company</h6>
   <div className='text-gray-300 flex flex-col'>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
    </div>

  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Resources</h6>
    <div className='text-gray-300 flex flex-col'>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
    </div>
 
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Social Links</h6>
    <div>
      <ul className='flex items-center gap-2'>
        <li className='bg-gray-700 p-2 rounded-full'><FaLinkedin /></li>
        <li className='bg-gray-700 p-2 rounded-full'><FaFacebook/></li>
        <li className='bg-gray-700 p-2 rounded-full'><FaInstagram /></li>
      </ul>
    </div>
  </nav>
</footer>
<div className='md:flex justify-between mt-7 border-t border-white/10 p-5'>
    <p className='text-gray-500 text-center'>© 2026 Digitools. All rights reserved.</p>
    <div className='flex gap-6 text-gray-500 items-center'>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
    </div>
</div>
</div>
    );
};

export default Footer;