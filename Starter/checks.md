# Required checks

Record what **actually** happened. Browser message wording may vary.

| # | Action or input | Expected result | What actually happened | Pass? |
|---|---|---|---|---|
| 1 | Read the page regions and heading levels | Meaningful structure and logical hierarchy | Meaningful structure & logical hierarchy | Pass |
| 2 | Click each visible label | The intended control is selected | Intended control selected | Pass |
| 3 | Submit with required fields empty | Browser blocks submission | Browser blocks submission | Pass |
| 4 | Enter `alex` as the email | Email-format check rejects it | Email-format rejects it as it requires a '@' | Pass |
| 5 | Complete other fields; leave the workshop prompt | Empty workshop choice is rejected | Cannot submit until workshop selected| Pass |
| 6 | Complete valid fictional details; submit | Readable local confirmation; nothing sent or stored | | Nothing sent or stored in dim | Pass
| 7 | Use Tab and Enter | Controls reachable in order; Enter submits | Managed to use tab to reach Submit button and press enter to submit | Pass |
| 8 | Change workshop; submit again | One current message reflects the new choice | | |
| 9 | Inspect the fixed status rule | Readable text; winning declaration explained | | |
| 10 | Inspect field spacing | You can name the box area you changed, and why | | |
