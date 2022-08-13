// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let randomColor;

// Add a row
function addR() {
    //Once use this function number of rows should increase
    numRows++;
    //create new row name NewRow
    let row = document.createElement("tr");
    row.classList.add("NewRow");

    if (numCols === 0) {
        //To have first Row first Coloumn must exist initially
        numCols++;
    }
    for (let i = 0; i < numCols; i++) {
        //Create new cell for every coloumns
        let cell = document.createElement("td");
        cell.classList.add("NewCell");
        cell.onclick = () => colorCell(cell); // allows cell to be colored when clicked
        //Add cell accordingly
        row.appendChild(cell);
        console.log(numCols);
    }
    //Add the row to grid
    document.getElementById("grid").appendChild(row);
}

// Add a column
function addC() {
    // Increase column count when clicked
    numCols++;

    // Create a new row when there are 0 row
    if (numRows == 0) {
        numRows++;
        let row = document.createElement("tr");
        row.classList.add("NewRow");
        document.getElementById("grid").appendChild(row);
    }

    for (let i = 0; i < numRows; i++) {
        // For each row, add a cell at the end
        let col = document.querySelectorAll("tr")[i].insertCell();
        // Give the cell a class
        col.classList.add("NewCell");
        col.onclick = () => colorCell(col); // allows cell to be colored when clicked
    }
}

// Remove a row
function removeR() {
    // Check if there are any rows
    if(numRows > 0){
        numRows--;
        //Remove last row from grid
        let row = document.getElementsByClassName("NewRow")[numRows];
        row.parentNode.removeChild(row);
    }

    // reset column count if removing last remaining row
    if(numRows === 0){
        numCols = 0;
    }   
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(numCols - 1);
        }
        numCols--;
    }

    if(numCols === 0){
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    // Get all the cells in the grid
    let cells = document.querySelectorAll("td");

    // Change the color of the cells from uncolored to the selected color
    for (let i = 0; i < numRows * numCols; i++) {
        if(cells[i].style.backgroundColor === ""){
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll() {
    // Get all the cells in the grid
    let col = document.querySelectorAll("td");

    // Change the color of the cells to the selected color
    for (let i = 0; i < numRows * numCols; i++) {
        col[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll() {
    //Get all cells in the grid by row
    let row = document.getElementsByTagName("tr");
    //Loop for each row
    for(const roworder of row){
        //For each row get each coloumn of box
        let col = roworder.getElementsByTagName("td");
        //Loop over the columns and set the background color to "" which is no color.
        for(let i=0; i<numCols; i++){
            col[i].style.background = "";
        }
    }
}

function setRandomColor() {
    randomColor = "#" + (Math.floor(Math.random() * 16777215).toString(16));
    console.log(randomColor);    
}



// Random Fill all cells
function randomFill() {
    
    let col = document.querySelectorAll("td");

    // Change the color of the cells to the selected color
    for (let i = 0; i < numRows * numCols; i++) {
        setRandomColor();
        col[i].style.backgroundColor = randomColor;
    }
}

// Color the cell to the selected color
function colorCell(cell) {
    // Change the color of the cell to the selected color
    cell.style.backgroundColor = colorSelected;
}