import "./App.css";
import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import Resume from "./components/Resume";
import Accordion from "./components/Accordion";
import AboutMe from "./components/AboutMe";
import Copyright from "./components/Copyright";
import MobileNavbar from "./components/MobileNavbar";
import Secret from "./components/Secret";

function App() {
  return (
    <div className="App">
      <div className="heading" id="home">
        <h1>Jacob Hewitson</h1>
        <h2>Software Developer, Passionate Learner, Ideal Employee</h2>
      </div>
      <Navbar />
      <MobileNavbar />
      <div className="site-content">
        <h3 className="content-header">Welcome!</h3>
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
      <br></br>
      <br></br>
      <hr></hr>
      <div className="site-content" id="about-me">
        <h4 className="content-subheader">Meet Jacob!</h4>
        <img
          id="profile-photo"
          src={process.env.PUBLIC_URL + "/images/ProfilePhoto.jpg"}
          alt="Jacob Hewitson"
        ></img>
        <AboutMe />
      </div>
      <hr></hr>
      <div className="site-content" id="projects">
        <h4 className="content-subheader">Projects</h4>
        <p>
          Here's some of the projects I've done. All of this information can be
          found in my Github which I'll link below:
        </p>
        <a id="github-link" href="https://github.com/hewitson-j">
          github.com/hewitson-j
        </a>
        <br></br>
        <br></br>
        <Accordion />
      </div>
      <hr></hr>
      <div className="site-content" id="resume">
        <h4 className="content-subheader">Resume</h4>
        <Resume />
      </div>
      <hr></hr>
      <div className="site-content" id="contact">
        <h4 className="content-subheader">Contact</h4>
        <ContactCard />
      </div>
      <Copyright />
      <Secret />
      <br></br>
    </div>
  );
}

export default App;
