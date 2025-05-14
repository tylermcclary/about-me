import React from 'react';

function Experience() {
  return (
    <main className="main-content">
      <section className="experience-section">
        <h2>Professional Experience</h2>
        <div className="education-item">
          <h3>LPL Financial</h3>
          <p>Assistant Vice President, Product Management | March 2023 - Present</p>
          <ul>
            <li>Lead the strategy and execution for all third party integrational API integrations, supporting platforms such as CRM, trading, planning, and invesetment tools.</li>
            <li>Defined and maintained a 12-24 month roadmap, prioritizing initiatives accross business lines and M&A deals.</li>
            <li>Spearheaded complex integration projects for institutional partners including Prudential, Equitable, and Atria Wealth Solutions (5,000+ Advisors).</li>
            <li>Actively engaged with financial advisors to ensure integrations addressed real-world advisor workflows and needs.</li>
          </ul>
        </div>
        <div className="education-item">
          <h3>SEI Investments</h3>
          <p>Product Owner/ Product Manager | March 2020 - March 2023</p>
          <ul>
            <li>Owned end-to-end roadmap for internal CRM product used to store and manage investor data for alternative investments.</li>
            <li>Led a cross-functional team of 5 business analysts and coordinated closely with a development team of 40+ engineers.</li>
            <li>Delivered frequent demos and strategy updates to senior leadership and investment managers.</li>
          </ul>
        </div>
      </section>

      <section className="experience-section">
        <h2>Academic Experience</h2>
        <div className="education-item">
          <h3>Temple University</h3>
          <p>MBA | December 2020</p>
          <ul>
            <li>Received my MBA from the Fox School of Business at Temple University while continuing to work full-time at SEI.</li>
            <li>General coursework included statistics, economics, business admin. I also took a few general CS classes.</li>
            <li>Capstone project included consulting for Philadelphia area small businesses.</li>
          </ul>
        </div>
        <div className="education-item">
          <h3>Widener University</h3>
          <p>Bachelor of Science in Business Administration | May 2016</p>
          <ul>
            <li>Graduated with a Bachelor of Science in Business Administration, specializing in Finance and Operations.</li>
            <li>Completed coursework in finance, accounting, and business management.</li>
            <li>Involved in the student managed investment fund, responsible for $50,000 portfolio.</li>
            <li>Member of the NCAA Division III Lacrosse team while there. Named Captain senior year and received all-conference honors.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Experience; 