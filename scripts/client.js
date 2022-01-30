$('document').ready(onReady);// when the dom is loaded, run the function onReady
let employees =[]; //array that the objects of employee will be pushed to
let totalSalary = 0; //global variable updated everytime the submitButton is clicked to show the total salary of all of the employees added to the employee array

function  onReady(){
    
   $('#submitButton').on('click', InputValues); //when the submit button is clicked, run the inputValues function
   $('#tableBody').on('click','#deleteButton', deleteRow); // when the deleteButton is created within the tableBody and then clicked, run deleteRow function

}
function InputValues() {// function ran when the button submitButton is pressed
    let employee = { // object of the persons information inputed on the DOM and stored into an object
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        idNumber: Number($('#id-number').val()),
        jobTitle: $('#job-title').val(),
        annualSalary: Number($('#annual-salary').val()),
        };
        
        // Appending the values of the object to the table
        $('#tableBody').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td>
        <td><button id='deleteButton'>Delete</button></td></tr>`);
        
        // clear values out of inputs on the DOM after everything above has run
        $('#first-name').val('');
        $('#last-name').val(''); 
        $('#id-number').val('');
        $('#job-title').val('');
        $('#annual-salary').val('');

        // push the employee object to our array of employees
        employees.push(employee);
        
        
        //aggregating totalSalary and adding it to the totalSalary variable eachtime the submit button is clicked
        // then call calculateMonthlyCosts using the totalSalary variable as a passthrough value
        totalSalary += employee.annualSalary;
        calculateMonthlyCosts(totalSalary);
        console.log(employees);
}

         //calculating Monthly costs and update the page with the new value
         //each time the add button is pressed   
function calculateMonthlyCosts(totalSalary) {
        let monthlyCosts = totalSalary / 12;
        $('.costsDisplay').empty();
        $('.costsDisplay').append(`${monthlyCosts}`);

        if (monthlyCosts > 20000) {
            $('.h3CostsDisplay').addClass('red');
        };   
}

//deleting the row the deleteButton is associated with
function deleteRow() {
        $(this).parent().parent().remove();
}
