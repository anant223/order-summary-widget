# Order Summary Widget

A small Prekies feature to view and filter orders, with summary of fullfilled revenue and pending order count

## How to run
npm install
npm run dev

## Decisions

I chose React because it was preferred option, and it's also easy to use for managing state, espcially, in this case for handling filter, and the displayed orders.The UI can also be cleanly separated into reusable components, which keeps the code organized and easier to maintain.

Since order totals werent' given directly, i calculate them from each order's itmes in shared utils, reused for both the table and summary. arrays are handled naturally, event if it's empty. 


## Ai Usage

When i got this assigment, i worte out on paper how the componets should be divided. I took help from AI to structure  the folders and files.

I also ran into a Vite/Node version conflict during setup, and Claude helped me work through that.

To build the UI, i took advantage  of Claude, so i didn't have to worry about where each element should be placed, becsically it help me to polish the page faster.

I wrote and integerated the core application logic - the order filtering, the reveneu/ pending calculations, and  components structure ( StatusFilter, StatusBadge, 
SummaryCard, orderTable).

Claude caught a cuple of real bugs in my own code - a typo ( order.item, insted of order.items) that crasehd the summary calcuation.




