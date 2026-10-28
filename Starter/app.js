// Campus Workshop Sign-up · PREPARED JavaScript
// You do not need to change this file. Read it to see which IDs it uses.
// Required IDs: workshop-form, full-name, email, workshop, status
// Nothing is sent or stored. The browser checks required fields first.

const form = document.querySelector("#workshop-form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const workshop = document.querySelector("#workshop");
const status = document.querySelector("#status");

// Helpful check: report any missing IDs in the Console.
const required = { "workshop-form": form, "full-name": fullName, email, workshop, status };
const missing = Object.keys(required).filter((id) => required[id] === null);
if (missing.length > 0) {
  console.error(`Missing element(s) with id: ${missing.join(", ")}. Check your HTML.`);
}

if (missing.length === 0) {
  // Runs only after the browser's required / type checks pass.
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the normal submission

    const name = fullName.value.trim();
    const chosen = workshop.options[workshop.selectedIndex].text;

    status.textContent =
      `Thanks, ${name}. Your place in "${chosen}" was checked locally. Nothing was sent or stored.`;
    status.classList.add("is-success"); // styles.css decides how this looks
  });

  // When any detail changes, clear the old confirmation.
  form.addEventListener("input", () => {
    status.textContent = "";
    status.classList.remove("is-success");
  });
}
