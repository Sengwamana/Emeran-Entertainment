import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer text-center py-8'>
        <div className='footer-links flex items-center justify-center gap-8'>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <p className='footer-credit text-sm mt-6'>Created By Emeran Tech</p>
    </footer>
  );
}

export default Footer;
