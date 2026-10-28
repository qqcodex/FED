ACTIVITY FINDER / LESSON 01 PRACTICAL
SETUP: open index.html in editor/browser, open Console, save and reload.
TASKS: change heading; change one CSS declaration visibly; correct case-sensitive matching while retaining original titles.
RUN EACH CHECK AND COMPARE:
"chess" -> ["Chess"]
"zzz" -> []
"" -> ["Chess", "Coding", "Cycling"]
Edit query in source, save and reload each time. The static paragraph is not updated by console.log().
EXPLAIN IN YOUR OWN WORDS: heading choice; CSS change/effect; why both strings are normalised; why original titles are retained; AI assistance and verification or none.

Heading Choice: I changed the header from "Activity Finder" to "Find your hobbies!" to seem more user interactive.

CSS change: I changed font-family from Arial, sans serif to Georgia, serif due to its elegant classic style.

Why both strings normalized: Both strings converted to same case as JavaScript compares characters by Unicode values, and uppercase and lowercase letters have entirely different values. .includes() method is strictly case-sensitive. 

Why original titles retained: Lowercasing is used for comparison and the code pushes original title into matches, so results Show title with correct capital letter in Console. 

Google AI mode helps to breakdown how .includes() method work in different circumstances. 

SUBMIT: index.html and README.txt before Lesson 2. Check Brightspace for exact deadline. Begin in class; complete unfinished work after class.
OPTIONAL: after core completion, add a fourth activity.
