
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Function for creating an empty array and prompting user for employee data
const collectEmployees = function() {
  let employees = [];

let addEmployee = true;

while (addEmployee) {
  let firstName = prompt("Enter first name:");
  let lastName = prompt("Enter last name:");
  let salary = prompt("Enter salary:");
  
  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: Number(salary)
  };

  employees.push(employee);

  
  addEmployee = confirm("Do you want to add another employee?");
}
return employees

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
let totalSalary = 0
employeesArray.forEach(employee => {totalSalary += employee.salary});
let averageSalary = totalSalary / employeesArray.length
console.log("The average salary of the employees is " + averageSalary)

}

// Selectinf a random employee
const getRandomEmployee = function(employeesArray) {
  console.log(employeesArray)

  let index = Math.floor(Math.random() * employeesArray.length);
      const computerChoice = employeesArray[index];
      console.log(employeesArray.length)
     console.log("The random winner is " + computerChoice.firstName + " " + computerChoice.lastName)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
