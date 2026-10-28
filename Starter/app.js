// Activity Directory – Lesson 03 practical
// Follow the interaction: select → iterate → listen → read → decide → update → check

// ---------------------------------------------------------------
// TASK 1 · SELECT and verify
// Select the form, keyword input, category select, Clear button,
// status element and all activity cards.
// ---------------------------------------------------------------
const form = document.querySelector("#activity-form");
const keywordInput = document.querySelector("#keyword");
const categorySelect = document.querySelector("#category");
const clearButton = document.querySelector("#clear");
const status = document.querySelector("#status");
const cards = document.querySelectorAll(".activity-card");

console.log(form !== null);
console.log(keywordInput !== null);
console.log(categorySelect !== null);
console.log(clearButton !== null);
console.log(status !== null);
console.log(cards.length);   // expected: 8


// ---------------------------------------------------------------
// TASK 2 · One shared function
// Use forEach() to decide for each card.
// Toggle "is-hidden" based on keyword AND category.
// Update the visible status text using textContent.
// ---------------------------------------------------------------
function filterActivities(query, category) {
  const normalisedQuery = query.toLowerCase(); // normalise as case sensitive search
  let visibleCount = 0;
  cards.forEach((card) => { // iterate over each card
    // READ the card text, and whether the card has the category class
    const cardText = card.textContent.toLowerCase();
    const hasCategory = card.classList.contains(category); 

    // DECIDE matchesKeyword && matchesCategory ("all" matches every card)
    const matchesKeyword = cardText.includes(normalisedQuery); // if card's text contain the search word?
    const matchesCategory = category === "all" || hasCategory;
    // DECIDE whether the card should be shown
    const shouldShow = matchesKeyword && matchesCategory;

    // UPDATE: hide cards that should not show; count the ones that remain
    card.classList.toggle("is-hidden", !shouldShow);
    if (shouldShow) {
      visibleCount += 1;
    }
    // UPDATE toggle "is-hidden"; count shown cards
  status.textContent =
    visibleCount === 1
      ? "1 activity found"
      : `${visibleCount} activities found`;

  });
  //   READ    the card text, and whether the card has the category class
  //           (hint: card.classList.contains(category))
  //   DECIDE  matchesKeyword && matchesCategory   ("all" matches every card)
  //   UPDATE  toggle "is-hidden"; count shown cards
  // });
  // UPDATE status text
}


// ---------------------------------------------------------------
// TASK 3 · LISTEN
// submit → keyword filtering (prevent the page reload)
// change → category filtering
// click  → Clear: reset both controls and show all cards
// Every handler calls filterActivities(query, category).
// ---------------------------------------------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop browser from reloading the page
  filterActivities(keywordInput.value, categorySelect.value);
})

// user select diff category 
categorySelect.addEventListener("change", () => {
  filterActivities(keywordInput.value.trim(), categorySelect.value);
});
 
clearButton.addEventListener("click", () => {
  keywordInput.value = "";
  categorySelect.value = "all";
  filterActivities("", "all");
});