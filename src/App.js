import "./App.css";
import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <div className="heading" id="home">
        <h1>Jacob Hewitson</h1>
        <h2>Software Developer, Passionate Learner, Ideal Employee</h2>
      </div>
      <Navbar />
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
      <div className="site-content" id="about-me">
        <h4 className="content-subheader">Meet Jacob!</h4>
        <img
          id="profile-photo"
          src={process.env.PUBLIC_URL + "/ProfilePhoto.jpg"}
          alt="Jacob Hewitson"
        ></img>
        <p></p>
      </div>
      <div className="site-content" id="projects">
        <h4 className="content-subheader">Projects</h4>
        <p>
          Here's some of the projects I've done. All of this information can be
          found in my Github which I'll link below:
        </p>
        <a id="github-link" href="https://github.com/hewitson-j">
          github.com/hewitson-j
        </a>
      </div>
      <div className="site-content" id="resume">
        <h4 className="content-subheader">Resume</h4>
        <Resume />
      </div>
      <div className="site-content" id="contact">
        <h4 className="content-subheader">Contact</h4>
        <ContactCard />
      </div>
    </div>
  );
}

export default App;
