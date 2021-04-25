const emplArr = [];

function onReady() {
    // function that runs when onReady is called
    $('#submitButton').on('click', function () { //clickhandler
        const firstName = $('#fName').val(); //variable for first name input
        const lastName = $('#lName').val(); //variable for last name input
        const idNumber = $('#idNum').val(); //variable for id input
        const jobTitle = $('#jTitle').val(); //variable for job title input
        const annSalary = $('#aSalary').val(); //variable for salary input

        const emplObj = {  //create employee object
            first: firstName,
            last: lastName,
            id: idNumber,
            title: jobTitle,
            salary: annSalary,
        }; //end create object

        emplArr.push(emplObj);  //push employee object to array

        $('#employeeTable').empty();  //clear employees on initialize

        for (let i = 0; i < emplArr.length; i++) {
            let sum = 0;
            const grandTotal = sum += emplArr[i].salary;
            //loop through array and populate employees
            addEmployee(emplArr[i].first, emplArr[i].last, emplArr[i].id, emplArr[i].title,
                emplArr[i].salary);
        }; //end for loop

        //empty input fields
        $('#fName').val('');
        $('#lName').val('');
        $('#idNum').val('');
        $('#jTitle').val('');
        $('#aSalary').val('');
    }); //end clickhandler
} //end onReady


$('monthlySum').append(parseFloat(grandTotal));
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
            ${annSalary}
            </td>
            <hr>
        </tr>`)
}; //end add employee


$(onReady);
