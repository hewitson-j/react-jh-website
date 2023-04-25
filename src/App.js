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
        <p></p>
      </div>
      <div className="site-content" id="contact">
        <h4>Contact</h4>
        <p></p>
      </div>
    </div>
  );
}

export default App;
