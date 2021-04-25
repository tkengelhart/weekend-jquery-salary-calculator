
const emplArr = [];
let monthlyTotal = 0;

function onReady() {
    // function that runs when onReady is called
    $('#submitButton').on('click', function () { //clickhandler
        const firstName = $('#fName').val(); //variable for first name input
        const lastName = $('#lName').val(); //variable for last name input
        const idNumber = $('#idNum').val(); //variable for id input
        const jobTitle = $('#jTitle').val(); //variable for job title input
        const annSalary = ($('#aSalary').val()); //variable for salary input
        const emplObj = {  //create employee object
            first: firstName,
            last: lastName,
            id: idNumber,
            title: jobTitle,
            salary: annSalary,
        };
        emplArr.push(emplObj);  //push employee object to array
        addEmployee(firstName, lastName, idNumber, jobTitle, annSalary)
        //call add employee function to add employee to list

        $('#employeeTable').empty();  //clear employees on initialize

        for (let i = 0; i < emplArr.length; i++) {
            //loop through array and populate employees
            addEmployee(emplArr[i].first, emplArr[i].last, emplArr[i].id, emplArr[i].title,
                emplArr[i].salary);
        }
        $('#monthlySum').append(parseFloat(monthlyTotal));

    });
};


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
};


$(onReady);
