import "./MobileNavbar.css";

function MobileNavbar() {
  return (
    <div id="mobile-navbar">
      <div
        id="menu-button"
        onClick={() => {
          let menuButton = document.querySelector("#menu-button");
          let mobileMenu = document.querySelector("#mobile-navbar-list");

          if (mobileMenu.style.display === "none") {
            mobileMenu.style.display = "block";
            menuButton.style.backgroundColor = "#030a55";
          } else {
            mobileMenu.style.display = "none";
            menuButton.style.backgroundColor = "#000b82";
          }
        }}
      >
        Menu
      </div>
      <ul id="mobile-navbar-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
