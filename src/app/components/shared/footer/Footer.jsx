import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            HattiFy
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            HattiFy is a premier digital marketplace for Qurbani livestock.
             We focus on providing healthy, 
             farm-fresh animals while ensuring a seamless booking experience for our community.
             
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" />
              <span>info@hattify.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <p className="text-sm mb-4 text-gray-300">Stay updated with our latest stock and offers.</p>
          <div className="flex gap-4">
            <a href="" className="p-3 bg-green-800 rounded-full hover:bg-green-500 transition-all text-white">
              <FaFacebook size={20} />
            </a>
            <a href="" className="p-3 bg-green-800 rounded-full hover:bg-green-500 transition-all text-white">
              <FaTwitter size={20} />
            </a>
            <a href="" className="p-3 bg-green-800 rounded-full hover:bg-green-500 transition-all text-white">
              <FaInstagram size={20} />
            </a>
            <a href="" className="p-3 bg-green-800 rounded-full hover:bg-green-500 transition-all text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} HattiFy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;








































