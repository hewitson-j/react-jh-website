import "./Resume.css";

function Resume() {
  return (
    <>
      <div className="education">
        <h4 className="resume-section-headers">Education History</h4>
        <h4>Western Governors University - B.S. of Computer Science</h4>
        <p>
          Graduated Nov 2022. Relevant courses I’ve taken include the following:
          Software I & II (development of Java applications), Data Structures
          and Algorithms I & II, Scripting and Programming I & II, Data
          Management (SQL Databases), Web Development Foundations, etc.
        </p>
      </div>
      <hr></hr>
      <div className="work-history">
        <h4 className="resume-section-headers">Work History</h4>
        <h4>
          IT Support Specialist - The Church of Jesus Christ of Latter-Day
          Saints
        </h4>
        <p>From Apr 2022 to Current</p>
        <ul>
          <li className="task-summaries">
            Supported and maintained software operated by the organization which
            was used on a daily basis
          </li>
          <li className="task-summaries">
            Collaborated in committees and advocated for implementation of
            policies and practices which aligned with industry standards for a
            more user-friendly experience
          </li>
          <li className="task-summaries">
            Created and implemented methods to overcome issues in
            troubleshooting tools
          </li>
        </ul>

        <h4>Personal Banker - Deseret First Credit Union</h4>
        <p>From Jun 2021 to Apr 2022</p>
        <ul>
          <li className="task-summaries">
            Developed and advocated for a solution that optimized our banking
            application software. This optimization reduced additional and
            unnecessary credit inquiries.
          </li>
          <li className="task-summaries">
            Lead, trained, and mentored Member Service Representative staff.
          </li>
          <li className="task-summaries">
            Achieved highest number of insurance, mortgage referrals and credit
            card upsells for the quarter, in the entire company.
          </li>
          <li className="task-summaries">
            Collaborated with team to achieve consistent exceeding monthly
            quotas and goals.
          </li>
        </ul>

        <h4>High-Risk Credit Analyst - RC Willey Home Furnishings</h4>
        <p>From Mar 2020 to Jun 2021</p>
        <ul>
          <li className="task-summaries">
            Managed accounting for customer financing.
          </li>
          <li className="task-summaries">
            Analyzed consumer credit reports to assess risk to corporate lending
            assets.
          </li>
        </ul>

        <h4>Office Supervisor - RC Willey Home Furnishings</h4>
        <p>From May 2019 to Mar 2020</p>
        <ul>
          <li className="task-summaries">
            Developed and strengthened a team of 10 associates to be able to
            provide a superior and efficient customer service experience.
          </li>
          <li className="task-summaries">
            Coached and guided our team to exceed our daily upsell and
            transactional goals.
          </li>
          <li className="task-summaries">
            Consistently was able to de-escalate complicated situations with
            customers and leave them satisfied.
          </li>
        </ul>

        <h4>
          Missionary Volunteer - The Church of Jesus Christ of Latter-Day Saints
        </h4>
        <p>From Dec 2016 to Dec 2018</p>
        <ul>
          <li className="task-summaries">
            Lead and trained a district of 6 missionaries
          </li>
          <li className="task-summaries">
            Conducted planning sessions that led to the achievement of daily,
            weekly, and monthly goals.
          </li>
          <li className="task-summaries">
            Was chosen to serve as the mission president’s personal secretary,
            created processes to automate day-to-day secretarial tasks
          </li>
        </ul>
      </div>
      <hr></hr>
      <div class="certifications">
        <h3 className="resume-section-headers">Certifications</h3>

        <h4>CompTIA Project+ - CompTIA, Jun 2022</h4>
        <p>
          Certified in Project Management, Agile methodology, Scrum through this
          certification. Certification information and candidate ID can be
          provided upon request.
        </p>

        <h4>ITIL Foundations - AXELOS, Jun 2022</h4>
        <p>
          Certified in ITIL Service practices. Certification information and
          candidate ID can be provided upon request.
        </p>
      </div>
      <hr></hr>
      <div className="skills">
        <h3 className="resume-section-headers">Skills</h3>

        <h4>Technical Skills</h4>
        <ul>
          <li className="skills-item">Javascript</li>
          <li className="skills-item">HTML</li>
          <li className="skills-item">CSS</li>
          <li className="skills-item">Java</li>
          <li className="skills-item">Python</li>
          <li className="skills-item">SQL</li>
          <li className="skills-item">C++</li>
          <li className="skills-item">Git</li>
          <li className="skills-item">GitHub</li>
        </ul>

        <h4>Soft Skills</h4>
        <ul>
          <li className="skills-item">Communcation</li>
          <li className="skills-item">Leadership</li>
          <li className="skills-item">Teamwork and Collaboration</li>
          <li className="skills-item">English</li>
          <li className="skills-item">Spanish</li>
        </ul>
      </div>
      <hr></hr>
      <div className="awards">
        <h4 className="resume-section-headers">Awards</h4>

        <h4>Pro-Protector Award - Deseret First Credit Union, Feb 2022</h4>
        <p>
          Obtained the highest number of referrals in the company (Q4 2021).
        </p>

        <h4>
          Master Problem Solver Award - Deseret First Credit Union, Jan 2022
        </h4>
        <p>Apprehended a fraudster attempting to scam the credit union.</p>

        <h4>
          Idea Submission Award 2021 - Deseret First Credit Union, Oct 2021
        </h4>
        <p>
          Submitted an idea and plan to optimize our banking application
          software.
        </p>

        <h4>We Show How Award - Deseret First Credit Union, Aug 2021 </h4>
        <p>
          Provided excellent leadership in leading our branch to achieve our
          goals and overcome obstacles.
        </p>

        <h4>
          Employee of the Month Award - RC Willey Home Furnishings, Aug 2019
        </h4>
        <p>
          Given for outstanding performance and improvements made to office
          productivity and processes.
        </p>
      </div>
    </>
  );
}

export default Resume;
