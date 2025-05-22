import React from 'react';

function Projects() {
  return (
    <main className="main-content">
      <h1>Projects and Interests</h1>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="education-item">
          <h3>This Website</h3>
          <p>I built this website using JavaScript (React), HTML, and CSS. This website is hosted using Firebase.</p>
        </div>
        <div className="education-item">
          <h3>Registration App</h3>
          <p>Coming soon...</p>
        </div>
      </section>

      <section className="philanthropy-section">
        <h2>Philanthropy</h2>
        <div className="education-item">
          <h3>Big Brothers Big Sisters of Central Ohio</h3>
          <p>Big Brother mentor since September 2024.</p>
        </div>
        <div className="education-item">
          <h3>Columbus Ice Hockey Club</h3>
          <p>Teaching blind children and young adults how to play hockey using accessible equipment.</p>
        </div>
      </section>
      

      <section className="reading-section">
        <h2>What I'm Reading...</h2>
        <div className="education-item">
          <h3>David Grann</h3>
          <li>The Wager</li>
          <li>Killers of the Flower Moon</li>
          <li>The Lost City of Z</li>
        </div>
        <div className="education-item">
          <h3>Invent and Wander: The Collected Writings of Jeff Bezos</h3>
        </div>
        <div> className="education-item">
          <h3>Hit Refresh: The Quest to Rediscover Microsoft's Soul and Imagine a Better Future for Everyone</h3>
        </div>
      </section>
    </main>
  );
}

export default Projects; 