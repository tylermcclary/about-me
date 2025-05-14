import React from 'react';

function Contact() {
  return (
    <main className="main-content">
      <h1>Contact</h1>
      <section className="contact-section">
        <div className="education-item">
          <h3>Connect with me on LinkedIn</h3>
          <a
            href="www.linkedin.com/in/tyler-mcclary"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/tylermcclary
          </a>
        </div>
      </section>
      <section className="contact-section">
        <div className="education-item">
          <h3>Contact me via email</h3>
          <a
            href="tyler.mcclary@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            tyler.mcclary@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact; 