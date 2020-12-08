import React from 'react';
import SocialLinks from '../../constants/socialLinks';

const Footer = () => (
  <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-icons" />
      <p>&copy;{new Date().getFullYear()} MDXBlog. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
