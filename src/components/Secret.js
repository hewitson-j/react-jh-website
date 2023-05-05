import "./Secret.css";

function Secret() {
  return (
    <div
      id="secret-box"
      onMouseOver={() => {
        let secret = document.getElementById("secret-box");
        secret.innerHTML = "You look lost friend...";
        secret.style.color = "black";
        secret.style.backgroundColor = "rgb(214, 214, 214)";
      }}
      onMouseOut={() => {
        let secret = document.getElementById("secret-box");
        secret.innerHTML = "...";
        secret.style.color = "white";
        secret.style.backgroundColor = "white";
      }}
      onClick={() => {
        let keyword = prompt(
          "You've met with a terrible fate, haven't you?\n\nPlease, if you would give me the keyword."
        );

        keyword = keyword.toUpperCase();

        if (keyword === "AMAPOLA") {
          alert("You have succeeded.");
        } else {
          alert("You shouldn't have done that...");
        }
      }}
    >
      ...
    </div>
  );
}

export default Secret;
