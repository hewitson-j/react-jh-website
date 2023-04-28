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
    </>
  );
}

export default Accordion;
