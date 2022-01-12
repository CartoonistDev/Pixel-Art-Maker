// Select color input
const pickColor = document.getElementById('colorPicker');
const newTable = document.getElementById('pixelCanvas');

// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const submitButton = document.getElementById('submit');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function (event) {

    //Prevent default submit value when user clicks the submit button
    event.preventDefault();

    // Helps clear the grid
    newTable.innerHTML = " ";

    // Makes grid
    makeGrid();
});


function makeGrid(event) {

// Your code goes here!

// Loops over the height values and
// Create a new cell row using the insertRow method

    for (r = 1; r <= height.value; r++) {
        let newCellRow = newTable.insertRow(0);

        // Loops over the width values and
        // Create a new cell using the insertCell method

        for (c = 1; c <= width.value; c++) {
            newCellRow.insertCell(0);

            // When a user clicks a target cell, change the
            // color of the cell to the color available in the color form

            newTable.addEventListener('click', function(event) {
                if (event.target.tagName === 'TD') {
                    event.target.style.backgroundColor = pickColor.value;
                }
            });
            
        }
    }
}


