import "./Accordion.css";

function Accordion() {
  return (
    <>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => {
            let content = document.getElementById("jh");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          JacobHewitson.com
        </div>
        <div className="accordion-content" id="jh">
          JacobHewitson.com is my portfolio website. It was done through React
          and hosted on GitHub Pages. I also purchased and configured the domain
          on Google Domains.
        </div>
      </div>
      <div class="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("mg");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          MineGrinder.com
        </div>
        <div class="accordion-content" id="mg">
          A website built for a client, this website was made in HTML,
          Javascript, and CSS. It is live at{" "}
          <a href="http://minegrinder.com">minegrinder.com</a>, and stay tuned
          to see how it comes out! Click{" "}
          <a
            href="https://github.com/hewitson-j/MineGrinder"
            id="external-link"
          >
            here
          </a>{" "}
          to go to the Github repository.
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("lab");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          LeapsandBoundsPrek.com
        </div>
        <div class="accordion-content" id="lab">
          A website built for a client, this website was made in React for a
          Preschool. It is live at{" "}
          <a href="https://www.LeapsandBoundsPrek.com">
            www.LeapsandBoundsPreK.com
          </a>
          . Click{" "}
          <a
            href="https://github.com/hewitson-j/leaps-and-bounds/"
            id="external-link"
          >
            here
          </a>{" "}
          to go to the Github repository.
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("calculator");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Calculator Application
        </div>
        <div class="accordion-content" id="calculator">
          A Javascript project. This calculator is a simple calculator which can
          add, subtract, multiply, and divide. This calculator is live at{" "}
          <a href="https://hewitson-j.github.io/CalculatorApp/">
            hewitson-j.github.io/CalculatorApp/
          </a>
          . You may also look at the repository{" "}
          <a href="https://github.com/hewitson-j/CalculatorApp">here</a>. Also,
          below I have included an image of the finished product:
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("clock");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Javascript Clock
        </div>
        <div class="accordion-content" id="clock">
          A Javascript clock, it has both an analog clock as well as a digital
          clock to tell the time. This calculator is live at{" "}
          <a href="https://hewitson-j.github.io/Clock/">
            hewitson-j.github.io/Clock/
          </a>
          . You may also look at the repository{" "}
          <a href="https://github.com/hewitson-j/Clock">here</a>. Also, below I
          have included an image of the finished product:
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("stopwatch");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Javascript Stopwatch and Timer
        </div>
        <div class="accordion-content" id="stopwatch">
          A timer made in Javascript. It also includes a stopwatch. This
          application is live at{" "}
          <a href="https://hewitson-j.github.io/Timer/">
            hewitson-j.github.io/Timer/
          </a>
          . You may also look at the repository{" "}
          <a href="https://github.com/hewitson-j/Timer">here</a>. Also, below I
          have included an image of the finished product:
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("cwb");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Church Website Bot
        </div>
        <div class="accordion-content" id="cwb">
          This AIML Bot was created to help users navigate{" "}
          <b>churchofjesuschrist.org</b> and help them find resources based on
          their needs. The GitHub files are{" "}
          <a href="https://github.com/hewitson-j/churchwebsitebot">here</a> and
          is live on the PandoraBots website. Click{" "}
          <a href="https://home.pandorabots.com/dash/bot-directory">here</a> to
          go to the directory and search{" "}
          <b>
            <i>Church Website Bot</i>
          </b>{" "}
          to find the live bot.
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("swi");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Inventory Tracker - University Project
        </div>
        <div class="accordion-content" id="swi">
          I did this project as the final assessment of my <b>Software I</b>{" "}
          course in univeristy. This application was made in <b>JavaFX</b> and{" "}
          <b>Java</b>. Primarily a front-end application, this app allows the
          user to create and track inventory for a bike store, both of bikes and
          associated parts. The application also allows the user to query search
          from among the parts and products.
          <br></br>
          <br></br>
          While Western Governors University/WGU requires that I maintain the
          repository private, upon request I can provide access to the
          repository and the application as well as any related documents.
          Below, however, is an image of the application UI for reference:
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("swii");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Appointment Tracker - University Project
        </div>
        <div class="accordion-content" id="swii">
          I did this project as the final assessment of my <b>Software II</b>{" "}
          course in univeristy. This application was made in <b>JavaFX</b> and{" "}
          <b>Java</b>, connecting to a <b>MySQL</b> database. This app allows
          the user to create and track appointments. It is a secure app
          requiring a username and password to log on.
          <br></br>
          <br></br>
          While Western Governors University/WGU requires that I maintain the
          repository private, upon request I can provide access to the
          repository and the application as well as any related documents.
          Below, however, is an image of the application UI for reference:
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("dsaii");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Delivery Route Calculator - University Project
        </div>
        <div class="accordion-content" id="dsaii">
          I did this project as the final assessment of my{" "}
          <b>Data Structures and Algorithms II</b> course in univeristy. This
          application was made in <b>Python 3.10</b>. Given a list of addresses
          and constraints, this project tested my skills at writing an algorithm
          to determine optimal delivery routes of packages split between
          multiple delivery vehicles. It tested the algorithm's ability to 1)
          determine the best route given the distances between various points,
          2) determine the best way to divide up the packages to meet weight
          requirements for the vehicles while still maintaining a maximum
          acceptable distance and 3) following client-requested adjustments it
          confirmed that all packages arrived on-time and before the end of the
          work day.
          <br></br>
          <br></br>
          While Western Governors University/WGU requires that I maintain the
          repository private, upon request I can provide access to the
          repository and the application as well as any related documents.
          However, below I have included screenshots of the application UI for
          reference:
        </div>
      </div>
      <div className="accordion-section">
        <div
          class="accordion-header"
          onClick={() => {
            let content = document.getElementById("sii");
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
          }}
        >
          Student Roster Application - University Project
        </div>
        <div class="accordion-content" id="sii">
          I did this project as the final assessment of my{" "}
          <b>Scipting and Programming II</b> course in univeristy. This
          application was made in <b>C++</b>. Given an array of students and
          student information, the application parses this data and transforms
          it into student objects and validates for any incorrect or incomplete
          information.
          <br></br>
          <br></br>
          While Western Governors University/WGU requires that I maintain the
          repository private, upon request I can provide access to the
          repository and the application as well as any related documents.
          Below, however, I have included a screenshot of the application in
          action:
        </div>
      </div>
      <div className="accordion-section">
        <div class="accordion-header">
          Youtube Analytics Calculator - University Capstone
        </div>
        <div class="accordion-content">
          I did this project as the final capstone of my Bachelors of Science:
          Computer Science from Western Governors University/WGU. This
          application was made in <b>Jupyter Notebooks</b> and{" "}
          <b>Python 3.10</b> using the libraries <b>NumPy</b>, <b>Pandas</b>,{" "}
          <b>MatPlot Lib</b>, and <b>SciKit Learn</b>. This assessment required
          that given data either gathered by myself or obtained through
          third-party sources I would need to create a machine learning model
          that would predict a result given input, as well as explain the data.
          It needed to have a user-friendly interface and provide visuals to
          represent the data and show trends. The data I chose to base my
          application on was the Top 1000 Most-Subscribed YouTube Channels as of
          October 2022. With this, I was able to make my Jupyter Notebook
          application show the initial data in several graphs, and create my
          model which predicted one's YouTube channel ranking by subscriber
          within 99% accuracy.
          <br></br>
          <br></br>
          While Western Governors University/WGU requires that I maintain the
          repository private, upon request I can provide access to the
          repository and the application as well as any related documents.
          However, I can provide access to an HTML version of the notebook if
          requested.
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default Accordion;
