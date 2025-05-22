import React from 'react';

function About() {
  return (
    <main className="main-content">
      <header className="profile-header">
        <div className="profile-image">
          <img src="/profile.jpg" alt="Tyler McClary" className="profile-photo" />
        </div>
        <h1>Tyler McClary</h1>
        <p className="tagline">Product Manager & Relationship Builder</p>
      </header>

      <section className="bio-section">
        <h2>About Me</h2>
        <p>
        Hello! I’m Tyler McClary — born and raised in Columbus, Ohio. After spending several years in Philadelphia for undergrad and grad school, I moved back to Columbus where I now live with my wife, whom I married in October 2024. Outside of work, you’ll usually find me enjoying the outdoors, whether it’s running, golfing, or just spending time with friends and family. My wife and I also love to travel and are always looking for our next adventure. I’ve always been passionate about learning, and I try to bring that mindset into everything I do — both personally and professionally.
        </p>
        <p>
        Professionally, I’ve spent nearly a decade in the product management space, working across CRM platforms and enterprise integrations. My specialty lies in building real-time API products and driving large-scale integrations with institutional clients — primarily in the financial services industry. I believe the best products are built by empowered, collaborative teams, and I thrive in environments where cross-functional partnership and clear communication are key. Whether I’m helping define a product vision or getting into the weeds with developers and stakeholders, I’m always focused on delivering value through thoughtful, scalable solutions.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Product Management</h3>
            <ul>
              <li>Product Vision and Strategy</li>
              <li>Market Awareness</li>
              <li>Clear Communication</li>
              <li>Enterprise Client Integrations</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>APIs as a Product</h3>
            <ul>
              <li>API Design Fluency (Swagger)</li>
              <li>Scaling RESTful APIs</li>
              <li>Strategic, Reusable API Design & Development</li>
              <li>Strategic Data Management & Distribution</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul>
              <li>Cursor AI</li>
              <li>AI Applications for Financial Services</li>
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Agile Methodologies</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Temple University</h3>
          <h4>Fox School of Business</h4>
          <p>Master of Business Administration</p>
          <p>Graduation Year: 2020</p>
        </div>
        <div className="education-item">
          <h3>Widener University</h3>
          <p>Bachelor of Science in Business Administration</p>
          <p>Graduation Year: 2016</p>
        </div>
      </section>

      <section className="educataion-section">
        <h2>Certifications</h2>
        <div className="education-item">
          <h3>CS50 - Introduction to Computer Science</h3>
          <p>Issued by Harvard University</p>
          <p>Issued Date: 2025</p>
        </div>
        <div className="education-item">
          <h3>Bloomberg Market Concepts</h3>
          <p>Issued by Bloomberg</p>
          <p>Issued Date: 2020</p>
        </div>
      </section>
    </main>
  );
}

export default About; 