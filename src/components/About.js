import React from 'react';

function About() {
  return (
    <main className="main-content">
      <header className="profile-header">
        <div className="profile-image">
          <img src="/profile.jpg" alt="Tyler McClary" className="profile-photo" />
        </div>
        <h1>Tyler McClary</h1>
        <p className="tagline">Product Manager & Problem Solver</p>
      </header>

      <section className="bio-section">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a strong foundation in web development
          and a keen eye for creating efficient, user-friendly applications. My journey
          in technology has equipped me with both technical expertise and problem-solving
          skills that I apply to every project I undertake.
        </p>
      </section>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>RESTful APIs</li>
              <li>Database Management</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Agile Methodologies</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Your University Name</h3>
          <p>Degree in Computer Science</p>
          <p>Graduation Year</p>
        </div>
      </section>
    </main>
  );
}

export default About; 