import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <img src= './logo.png' alt="PCOS Detection Logo" />
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/selfdiagnosis">Self-Diagnosis</a></li>
            <li><a href="/dietplanner">Diet Planner</a></li>
            <li><a href="/yogaplanner">Yoga Planner</a></li>
            <li><a href="/cycletracker">Cycle Tracker</a></li>
            <li><a href="/lifestylesuggestion">Lifestyle Suggestion</a></li>
            <li><a href="/contact">Contact</a></li>
            
          </ul>
        </div>
        <div class="footer-section contact">
  <h3>Contact Us</h3>
  <ul class="contact-list">
    <li>
      <span class="contact-label">Email:</span>
      <a href="mailto:saumya.anand27@gmail.com">saumya.anand27@gmail.com</a>
    </li>
    <li>
      <span class="contact-label">Phone:</span>
      <a href="tel:+917061345247">+91 7061345247</a>
    </li>
    <li>
      <span class="contact-label">Email:</span>
      <a href="mailto:swetasumandas2@gmail.com">swetasumandas2@gmail.com</a>
    </li>
    <li>
      <span class="contact-label">Phone:</span>
      <a href="tel:+918210927885">+91 8210927885</a>
    </li>
    <li>
      <span class="contact-label">Email:</span>
      <a href="mailto:sinhapayal2913@gmail.com">sinhapayal2913@gmail.com</a>
    </li>
    <li>
      <span class="contact-label">Phone:</span>
      <a href="tel:+919905906631">+91 9905906631</a>
    </li>
  </ul>
</div>

      </div>
      <div className="footer-bottom">
        &copy; 2024 PCOS Detection | Designed by Saumya,Sweta and Payal
      </div>
    </footer>
  );
};

export default Footer;
