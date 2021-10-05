//get values from the user, the drip and drop values
function getValues() {
    let dripValue = document.getElementById("dripValue").value;
    let dropValue = document.getElementById("dropValue").value;

    //parse for numbers
    dripValue = parseInt(dripValue);
    dropValue = parseInt(dropValue);

    //check for integers
    if (Number.isInteger(dripValue) && Number.isInteger(dropValue)) {

        //we call dripDrop
        let ddArray = dripDrop(dripValue, dropValue);

        //we call displayData and write values to the screen
        displayData(ddArray);

    } else {
        alert("You Must Enter Integers");
    }


}

//do dripDrop
function dripDrop(dripValue, dropValue) {
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        //check to see if divisible by both (3 and 5)
        if (i % dripValue == 0 && i % dropValue == 0) {
            returnArray.push("DripDrop");

        }
        //check to see if divisible by drip value(3)
        else if (i % dripValue == 0) {
            returnArray.push("Drip");

        }
        //check to see if divisible by drop value (5)
        else if (i % dropValue == 0) {
            returnArray.push("Drop");
        }

        else {
            returnArray.push(i)
        }


    }

    return returnArray;
}

//loop over the array and create a tablerow for each

function displayData(ddArray) {

    //get the table body element from page
    let tableBody = document.getElementById("results");

    //get the template
    let templateRow = document.getElementById("ddTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < ddArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab the td's put into array

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(ddArray[index]);
        rowCols[0].textContent = ddArray[index];

        rowCols[1].classList.add(ddArray[index + 1]);
        rowCols[1].textContent = ddArray[index + 1];

        rowCols[2].classList.add(ddArray[index + 2]);
        rowCols[2].textContent = ddArray[index + 2];

        rowCols[3].classList.add(ddArray[index + 3]);
        rowCols[3].textContent = ddArray[index + 3];

        rowCols[4].classList.add(ddArray[index + 4]);
        rowCols[4].textContent = ddArray[index + 4];

        tableBody.appendChild(tableRow);
    }

    //add all the rows to the table
}
