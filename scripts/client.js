$('document').ready(onReady);
let employees =[]; //array that the objects of employee will be pushed to
let monthlyCosts = 0;

function  onReady(){
    // console.log(employee.annualSalary);
   $('#submitButton').on('click', InputValues);
   $('#deleteButton').on('click', deleteRow);

}
function InputValues() {//grabbing and emptying values put into inputs on the DOM
    let employee = { // object of information regarding the persons information inputed on the DOM
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        idNumber: Number($('#id-number').val()),
        jobTitle: $('#job-title').val(),
        annualSalary: Number($('#annual-salary').val()),
        };
        employees.push(employee);
         // calculating Monthly costs and update the page with the new value
         //each time the add button is pressed   
        let totalSalary=0;

        for (let currentEmployee of employees) {
        totalSalary += currentEmployee.annualSalary;
        }
        
        monthlyCosts = totalSalary / 12;
        console.log(monthlyCosts);
        $('.costsDisplay').empty();
        $('.costsDisplay').append(`${monthlyCosts}`);
        if (monthlyCosts > 20000) {
            $('.h3CostsDisplay').addClass('red');
        };
        
        //emptying input fields after the submit button is clicked
        $('#first-name').val('');
        $('#last-name').val(''); 
        $('#id-number').val('');
        $('#job-title').val('');
        $('#annual-salary').val('');
        console.log(employee);
        //not working!!! work on later!!
        //appending to the table

        $('#tBody').append('<tr><button>hi</button></tr>');
        $('#tBody').append(`<tr class='appendNewEmployee'></tr> <button class='deleteButton'>delete</button>
        <td>$('#first-name').val()</td>
        <td>$('#last-name').val()</td>
        <td>$('#id-number').val()</td>
        <td>$('#job-title').val()</td>
        <td>$('#annual-salary').val()</td>`);

        // $('.appendNewEmployee').append(`<td>${employee.firstName}</td>`);
        // $('.appendNewEmployee').append(`<td>${employee.lastName}</td>`);
        // $('.appendNewEmployee').append(`<td>${employee.idNumber}</td>`);
        // $('.appendNewEmployee').append(`<td>${employee.jobTitle}</td>`);
        // $('.appendNewEmployee').append(`<td>${employee.annualSalary}</td>`);
}

function deleteRow() {
    
}
