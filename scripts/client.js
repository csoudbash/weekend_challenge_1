$('document').ready(onReady);
let employees =[];//array that the objects of employee will be pushed to
// let employee = { // object of information regarding the persons information inputed on the DOM
//     firstName: '',
//     lastName: '',
//     idNumber: 0,
//     jobTitle: '',
//     annualSalary: 0,
//     };


function  onReady(){
    // console.log(employee.annualSalary);
   $('#submitButton').on('click', InputValues);
   $('#deleteButton').on('click', deleteRow);
}
function InputValues() {//grabbing and emptying values put into inputs on the DOM
    let employee = { // object of information regarding the persons information inputed on the DOM
        firstName: '',
        lastName: '',
        idNumber: 0,
        jobTitle: '',
        annualSalary: 0,
        };

    employee.firstName = $('#first-name').val(); 
        // console.log(employee.firstName);
    employee.lastName = $('#last-name').val(); 
        // console.log(employee.lastName);
    employee.idNumber = $('#id-number').val();
        // console.log(employee.idNumber);
    employee.jobTitle = $('#job-title').val();
        // console.log(employee.jobTitle);
    employee.annualSalary = $('#annual-salary').val();
        // console.log(employee.annualSalary);

        //!!!Not finished !!! Pushing the current created object to the employees array
    let employeePush = employees.push(employee);
    console.log(employeePush);

        //emptying input fields after the submit button is clicked
        $('#first-name').val('');
        $('#last-name').val(''); 
        $('#id-number').val('');
        $('#job-title').val('');
        $('#annual-salary').val('');
        console.log(employee);

        $('#table').append('<tr id="new-employee.new"></tr>')
        $('#new-employee').append(`<td>${employee.firstName}</td>`);
        $('#new-employee').append(`<td>${employee.lastName}</td>`);
        $('#new-employee').append(`<td>${employee.idNumber}</td>`);
        $('#new-employee').append(`<td>${employee.jobTitle}</td>`);
        $('#new-employee').append(`<td>${employee.annualSalary}</td>`);

}
function appendInputValues() { 

    
}

function deleteRow() {
    
}