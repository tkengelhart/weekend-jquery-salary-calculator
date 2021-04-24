console.log('in JS');

$(onReady);
const emplArr = [];

function onReady() {
    //create click handler
    $('#submitButton').on('click', function (event) {
        //capture input box values and append to DOM
        const firstName = $('#fName').val();
        const lastName = $('#lName').val();
        const idNumber = $('#idNum').val();
        const jobTitle = $('#jTitle').val();
        const annSalary = $('#aSalary').val();
        //need function call to append this to the DOM

        addEmployee(firstName, lastName, idNumber, jobTitle, annSalary);
    });
    //clear input items beforehand
    $('#employee-list').empty();

    for (let i = 0; i < emplArr.length; i++) {  //create a for loop to loop through array
        emplArr.push(emplArr[i]);
        console.log(emplArr);
    }


};
function addEmployee(firstName, lastName, idNumber, jobTitle, annSalary) {
    $('#employee-list').append(`
    <li>
    <thead>
     <tr>First Name</tr>
     <tr>Last Name</tr>
     <tr>ID</tr>
     <tr>Job Title</tr>
    <tr>Annual Salary</tr>
    </thead>
    </li>
`);

}

