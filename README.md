# Mandiant Take Home Problem - UI Challenge

The goal of this exercise is for the candidate to write a combination of HTML,
CSS, and Javascript which will render a stylized table containing attributes
about users obtained from JSON encoded data. This table will be
navigable using the keyboard.

## Overview

Your tasks are as follows:

1) Programmatically produce a valid html table by reading in the data contained
in `users.json`. You may explicitly include this data in your js or html file, 
but you may not modify its structure.

2) Screenshot.png is attached to serve as general guidance on display, do not feel the need to match it stylistically.

3) Using Javascript or HTML, allow a user to be able to click any part of the
table row. The user should be directed to the relative url `users.html#id`
where `id` is the user id of the currently selected user.
The `users.html` should be a blank document with no included functionality.

4) Enable the user to navigate the table using the up and down arrow keys
on their keyboard. When the keyboard arrows are used, the appropriate row
should be highlighted to indicate the selection. When the enter key is pressed,
the user should be directed to the url associated with that row (from step #3).
Ensure that you override the arrow key's default behavior and make
considerations for how you will allow the users to see selected rows that are
outside of the user's viewport.

If you wish, you may use any external javascript dependencies and libraries
to help accomplish the above tasks.

## Sample Materials

1) `./users.json`: this file is a JSON array of user data. The contents of this
file may be copied and pasted into your solution for simplicity. Please do not
modify the structure or the content of the JSON.

2) `./screenshot.png`: a screenshot of the desired styling to complete task #2.
The screenshot was taken on Mac OS X 10.7.3 with Google Chrome version 22. The
font used is "Helvetica Neue"

## Considerations

For Task #4 ensure that you override the arrow key's default behavior and make
considerations for how you will allow the users to see selected rows that are
outside of their browser's viewport.

## Deliverable

Submit a zip file entitled "solution.zip" containing the following files:

* `index.html`: The file we will open to view your stylized table and your
solution. All dependencies should be linked relatively from this file.
* `user.html`: A blank file needed to complete task #3.
* `index.css`: All CSS styling used to complete Task #2.
* `index.js`: All custom written Javascript used to complete the assigned tasks.
* `dependencies/`: A folder containing any external js libraries you utilized to 
accomplish the assigned tasks.
