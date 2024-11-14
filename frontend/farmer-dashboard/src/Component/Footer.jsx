// Footer.jsx
import React from 'react';
import './Footer.css'; // Import a CSS file for styling (optional)

function Footer() {
  return (
    <footer>
          <div className="foot-pannel-1">Back to Top</div>
          <div className="foot-pannel-2">
            <div>
              <p>Get to Know Us</p>
              <ul>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div>
              <p>Connect with Us</p>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </div>
            <div>
              <p>Payment Products</p>
              <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-pannel-4">
            <div className="pages">
              <a href="#conditions">Condition of Use</a>
              <a href="#privacy">Privacy Notice</a>
            </div>
            <div className="copyright">
              © 1996-2024, FarmConnect.com, Inc. or its affiliates
            </div>
          </div>
        </footer>
  );
}

export default Footer;
