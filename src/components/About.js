import React from 'react';

function About() {
  return (
    <main className="main-content">
      <header className="profile-header">
        <div className="profile-image">
          <img src="/profile.jpg" alt="Tyler McClary" className="profile-photo" />
        </div>
        <h1>Tyler McClary</h1>
        <p className="tagline">Product Leader | Integrations, APIs & AI</p>
      </header>

      <section className="bio-section">
        <h2>About Me</h2>
        <p>
        Hello! I’m Tyler McClary — born and raised in Columbus, Ohio. After spending several years in Philadelphia for undergrad and grad school, I moved back to Columbus where I now live with my wife, whom I married in October 2024. Outside of work, you’ll usually find me enjoying the outdoors, whether it’s running, golfing, or just spending time with friends and family. My wife and I also love to travel and are always looking for our next adventure. I’ve always been passionate about learning, and I try to bring that mindset into everything I do — both personally and professionally.
        </p>
        <p>
        Professionally, I’m a product leader with 10+ years in financial services technology, from fund operations through product management. Today I lead product for a third-party and institutional integration platform, guiding a product team and two scrum teams across CRM and partner integrations, experience APIs, and AI-driven automation. I believe the best products are built by empowered, collaborative teams, and I focus on delivering measurable value through reusable, scalable solutions that take manual work off people’s plates.
        </p>
      </section>

      <section className="highlights-section">
        <h2>2026 Highlights</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Predictable Delivery</h3>
            <ul>
              <li>38 of 38 committed and stretch features delivered across three planning intervals</li>
              <li>313 stories shipped across 59 production releases</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Platform Modernization</h3>
            <ul>
              <li>Moved CRM integrations to a modern cloud platform and retired legacy middleware</li>
              <li>Shifted client data to real-time APIs and event streaming, with multi-region disaster recovery</li>
              <li>Cut partner onboarding from 12 months to 2-6 months and integration cost from $1.2M to ~$500K</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Advisor Value</h3>
            <ul>
              <li>Relaunched a core CRM integration, shipping 14 features and saving advisors 22,800+ hours a year</li>
              <li>Led an AI meeting-notes integration from business case to funding, saving advisors 100,000+ hours a year across the advisor base</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>AI Adoption</h3>
            <ul>
              <li>Grew advisor CRM integration utilization 49%</li>
              <li>Built an AI product operating system of 15 Claude skills, now used by a second product team</li>
              <li>Recognized with Product AI Adoption and Product-Tech Value awards</li>
            </ul>
          </div>
        </div>
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
              <li>OKRs & Multi-Team Agile Delivery</li>
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
              <li>Claude Code & Cursor AI</li>
              <li>AI Agents & MCP Integrations</li>
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
          <h3>LPL Certified API Champion</h3>
          <p>First member of the Product Organization to receive this internal LPL Designation (11 total in the firm)</p>
          <p>Given to team members who have created and reviewed multiple APIs</p>
          <p>Team members who receive this designation are advocates for LPL's API-as-a-product strategy</p>
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