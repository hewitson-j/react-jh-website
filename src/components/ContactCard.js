import "./ContactCard.css";

function ContactCard() {
  return (
    <>
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
    </>
  );
}

export default ContactCard;
