$(onReady);
const emplArr = [];

function onReady() {
    $('#submitButton').on('click', function () {
        //capture input box values and append to DOM
        const firstName = $('#fName').val();
        const lastName = $('#lName').val();
        const idNumber = $('#idNum').val();
        const jobTitle = $('#jTitle').val();
        const annSalary = $('#aSalary').val();
        const emplObj = {
            first: firstName,
            last: lastName,
            id: idNumber,
            title: jobTitle,
            salary: annSalary,
        };
        emplArr.push(emplObj);
        return emplArr;
    });

    $('#employeeList').empty();

    for (let i = 0; i < emplArr.length; i++) {
        addEmployee(emplyArr[i].first, emplyArr[i].last, emplyArr[i].id, emplyArr[i].title, emplyArr[i].salary);

    }
    function addEmployee(first, last, id, title, salary) {
        $('#employeeList').append(`<li>` + firstName + lastName + idNumber + jobTitle + annSalary + `<li>`);  //update this with rows later
    }  //outside of on ready function call so it doesn't repeat









}
$(onReady);

    // function monthlyCosts() {  //will use for loop to capture annual salary of employees
    //     annSalary[i];
    // }