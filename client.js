console.log('in JS');

$(onReady);
const emplArr = [];

function onReady() {
    firstName = $('#fName').val();
    lastName = $('#lName').val();
    idNumber = $('#idNum').val();
    jobTitle = $('#jTitle').val();
    annSalary = $('#aSalary').val();

    $('#submitButton').on('click', function (event) {
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
                emplObj: salary = aSalary
            }
            console.log(emplObj);
            for (emplObj of emplArr) {
                tbody.append(`<li>` + emplObj.first + emplObj.last + emplObj.id + emplObj.title + emplObj.salary + `</li>`);
            }
        }
        console.log(emplArr);


    })
};

