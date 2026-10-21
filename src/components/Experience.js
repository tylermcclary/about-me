import React from 'react';

function Experience() {
  return (
    <main className="main-content">
      <section className="experience-section">
        <h2>Professional Experience</h2>
        <div className="education-item">
          <h3>LPL Financial</h3>
          <p>Vice President, Product Management | January 2025 - Present</p>
          <ul>
            <li>Lead product for the firm’s third-party and institutional integration platform across two scrum teams, delivering 38 of 38 committed and stretch features over three planning intervals and 313 stories across 59 production releases in 2026.</li>
            <li>Lead a product management team covering CRM and partner integrations and strategic experience API and MCP development, setting roadmap priorities with business, operations and technology leaders.</li>
            <li>Defined OKRs for the integration portfolio, including advisor CRM integration utilization, which grew 49%.</li>
            <li>Own data integration for a large institutional platform sunset, a $6M-$15M enterprise program; led legacy CRM data migration and coordinated data hydration into a new client system of record.</li>
            <li>Modernized core CRM integrations: moved them to a new cloud platform, retired legacy middleware, and shifted client data to real-time APIs.</li>
            <li>Relaunched a core CRM integration, shipping 14 features that automate contact linking across 546,970 contacts, saving advisors 22,800+ hours a year; set a goal to cut advisor support contacts 50% through automation.</li>
            <li>Took an AI meeting-notes integration from PRD and business case through funding, saving 100,000+ advisor hours a year across 7,700 advisors.</li>
            <li>Saved 4,500+ advisor hours a year across ~3,500 advisors by moving an institutional partner onto the firm’s standard CRM integration framework.</li>
            <li>Cut partner onboarding time from 12 months to 2-6 months and institution integration cost from $1.2M to ~$500K by standardizing integrations on a reusable framework.</li>
            <li>Built an AI product operating system (15 Claude skills automating standups, PRD-to-story breakdown, reporting and roadmaps), rolled out to a second product team and recognized with the firm’s Product AI Adoption and Product-Tech Value awards.</li>
          </ul>
        </div>
        <div className="education-item">
          <h3>LPL Financial</h3>
          <p>Assistant Vice President, Product Management | January 2023 - January 2025</p>
          <ul>
            <li>Led institutional integration projects that onboarded 5,000+ advisors and over $100B in assets under management.</li>
            <li>Reduced institutional onboarding costs by $600K by building a reusable API integration framework.</li>
            <li>Owned funding and prioritization for a $3M core product budget within a $477M technology portfolio.</li>
            <li>Led implementation of an AI agent automating account transfer processing across ~300,000 manual transfers a year, reaching a 70% straight-through processing rate and a 25% cut in manual effort.</li>
            <li>Managed an agile scrum team of ~25 and engaged directly with advisors to shape the roadmap.</li>
          </ul>
        </div>
        <div className="education-item">
          <h3>SEI Investments</h3>
          <p>Product Manager, Business Analyst & Fund Operations Team Leader | September 2018 - January 2023</p>
          <ul>
            <li>Owned the roadmap for an internal CRM platform managing institutional investor data, leading 5 business analysts alongside a 40-person development team.</li>
            <li>Led client implementations, conversions and data migrations from requirements through release.</li>
            <li>Started in alternative investment fund operations, supervising a team of analysts across hedge fund and private equity clients in a regulated environment.</li>
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