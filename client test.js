console.log('in JS');

$(onReady);
const emplArr = [];

function onReady() {
    $('#submitButton').on('click', function (event) {
        //capture input box values and append to DOM
        const firstName = $('#fName').val();
        const lastName = $('#lName').val();
        const idNumber = $('#idNum').val();
        const jobTitle = $('#jTitle').val();
        const annSalary = $('#aSalary').val();
        firstName.empty();
        lastName.empty();
        idNumber.empty();
        jobTitle.empty();
        annSalary.empty();
        let table = $('<table></table');
        let tbody = $('<tbody id="tableBody"></tbody');
        table.append(tbody);
        $('.formContainer').append(table);

        for (let i = 0; i < emplArr.length; i++) {
            emplArr.push(emplArr[i]);
            const emplObj = {
                emplObj: first = firstName,
                emplObj: last = lastName,
                emplObj: id = idNum,
                emplObj: title = jobTitle,
                emplObj: salary = aSalary,
            };
        }


    });
}

<tbody>
    <tr>
        <td>First Name</td>
        <td>${firstName}</td>
    </tr>
    <tr>
        <td>Last Name</td>
        <td>${lastName}</td>
    </tr><tr>
        <td>ID Number</td>
        <td>${idNumber}</td>
    </tr>
    <tr>
        <td>Job Title</td>
        <td>${jobTitle}</td>
    </tr>
    <tr>
        <td>Annual Salary</td>
        <td>${annSalary}</td>
    </tr>
    <tr>
        <td colspan="2">
        </td>
    </tr>
    <tbody></tbody>