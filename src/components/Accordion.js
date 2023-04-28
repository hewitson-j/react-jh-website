import "./Accordion.css";

function Accordion() {
  return (
    <>
      <div className="accordion-section">
        <div className="accordion-header">JacobHewitson.com</div>
        <div className="accordion-content">
          JacobHewitson.com is my portfolio website. It was done through React
          and hosted on GitHub Pages. I also purchased and configured the domain
          on Google Domains.
        </div>
      </div>
      <div class="accordion-section">
        <div class="accordion-header">MineGrinder.com</div>
        <div class="accordion-content">
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
        <div class="accordion-header">LeapsandBoundsPrek.com</div>
        <div class="accordion-content">
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
    </>
  );
}

function toggleAccordion() {}

export default Accordion;
