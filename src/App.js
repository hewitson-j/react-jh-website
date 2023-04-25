import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="heading" id="home">
        <h1>Jacob Hewitson</h1>
        <h2>Software Developer, Passionate Learner, Ideal Employee</h2>
      </div>
      <Navbar />
      <div className="site-content">
        <h3>Welcome!</h3>
        <p>
          My name is Jacob Hewitson. I am a Software Engineer with a B.S. of
          Computer Science. I'm really excited to work with you and provide
          quality products to meet your software needs. Here on my website you
          can see different projects I've worked on or am currently working on!
        </p>
        <button>
          <a href="#projects">Click here!</a>
        </button>
      </div>
      <div className="site-content" id="about-me">
        <h4>Meet Jacob!</h4>
        <img
          id="profile-photo"
          src={process.env.PUBLIC_URL + "/ProfilePhoto.jpg"}
          alt="Jacob Hewitson"
        ></img>
        <p></p>
      </div>
      <div className="site-content" id="projects">
        <h4>Projects</h4>
        <p>
          Here's some of the projects I've done. All of this information can be
          found in my Github which I'll link below:
        </p>
        <a id="github-link" href="https://github.com/hewitson-j">
          github.com/hewitson-j
        </a>
      </div>
      <div className="site-content" id="resume">
        <h4>Resume</h4>
      </div>
      <div className="site-content" id="contact">
        <h4>Contact</h4>
        <p>
          Feel free to contact me at any time! Even though I may not be able to
          respond right away I will always respond within 24 hours. Below I've
          included my contact information as well as my socials to follow me and
          get in touch. I've also included a button to email me directly. I hope
          to hear from you soon!
        </p>
        <div id="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com/jake.hewitson.31/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_man_hewi/">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/hewitson-j">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jacob-hewitson-18b93321a/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <button id="email-me">
          <a href="mailto:jacob.a.hewitson@gmail.com">Email Me!</a>
        </button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
