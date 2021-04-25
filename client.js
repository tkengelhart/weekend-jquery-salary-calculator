const emplArr = [];
let sum = 0;


function onReady() {
    // function that runs when onReady is called
    $('#submitButton').on('click', function () { //clickhandler
        const firstName = $('#fName').val(); //variable for first name input
        const lastName = $('#lName').val(); //variable for last name input
        const idNumber = $('#idNum').val(); //variable for id input
        const jobTitle = $('#jTitle').val(); //variable for job title input
        const annSalary = Number($('#aSalary').val()); //variable for salary input

        const emplObj = {  //create employee object
            first: firstName,
            last: lastName,
            id: idNumber,
            title: jobTitle,
            salary: Number(annSalary),
        }; //end create object

        emplArr.push(emplObj);  //push employee object to array

        $('#employeeTable').empty();  //clear employees on initialize

        for (let i = 0; i < emplArr.length; i++) {
            if (emplArr[i].salary > 0) {
                sum += (Number(emplArr[i].salary))
            };
            addSum(sum);  //looping through to add salary to sum on each loop, make sure to empty sum after values entered (below)
            //loop through array and populate employees
            addEmployee(emplArr[i].first, emplArr[i].last, emplArr[i].id, emplArr[i].title,
                emplArr[i].salary);


            // let salary = parseInt(emplArr[i].salary);
            // sum += salary;
            // $('#monthlySum').append(sum);


            // console.log(parseFloat(sum));

        }; //end for loop

        //empty input fields
        $('#fName').val('');
        $('#lName').val('');
        $('#idNum').val('');
        $('#jTitle').val('');
        $('#aSalary').val('');
        sum = 0;  //reset global sum to zero on each pass through


    }); //end clickhandler

    //create remove button click handler

    $('#employeeTable').on('click', $('#removeButton'), function (event) {
        let deleteRow = $(event.target);
        deleteRow.closest('tr').remove();


    }); //end remove button


} //end onReady

//add inputs to table
function addEmployee(firstName, lastName, idNumber, jobTitle, annSalary) { //create function to append to list
    $('#employeeTable').append(`
        <tr>
            <td>
            ${firstName}
            </td>
            <td>
            ${lastName}
            </td>
            <td>
            ${idNumber}
            </td>
            <td>
            ${jobTitle}
            </td>
            <td>
            $${annSalary}
            </td>
            <td>
            <button id="removeButton">Remove</button>
        </tr>`)
}; //end add employee

//append running sum divided by 12 to get monthly costs   
//need to change color to red if monthly costs exceed 20K

function addSum(sum) {
    let monTotal = sum / 12;
    $('#monthlySum').text(parseFloat(monTotal.toFixed(2)));
    if (monTotal > 20000) {
        $('#monthlySum').addClass("inTheRed").text(parseFloat(monTotal.toFixed(2)));
    }

};


// sum += annSalary;
// console.log(sum);

// $('#monthlySum').append(sum);

$(onReady);
