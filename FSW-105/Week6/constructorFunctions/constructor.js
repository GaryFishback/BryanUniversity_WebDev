// First, you will create an array named employees. EMPTY
let employees = [];
// Employee constructor with the first three attributes 
// Name
// Job title
// Salary
// Status
// the fourth will be defaulted to "Full Time".
// This constructor will have a method called printEmployeeForm to prints the employee's information to the console.
// (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

class Employee {
    constructor(name, jobTitle, salary, status = "Full-Time") {
        this.name = name
        this.jobTitle = jobTitle
        this.salary = salary
        this.status = status
        employees.push(this)
    }
    printEmployeeForm() {
        console.log(` Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/year, Status: ${this.status}. `)
    }

}

// Instantiate three employees
const aura = new Employee("Aura Whales", "Receptionist", 2500, "Part-Time")
const cleeve = new Employee("Cleeve Blueland", "Doctor", 5500)
const liz = new Employee("Lissandra Herilliumme", "Surgeon", 8000)

// Override the status attribute of one of them to either "Part Time" or "Contract"

// Call the printEmployeeForm method for each employee
aura.printEmployeeForm()
cleeve.printEmployeeForm()
liz.printEmployeeForm()

// Put the generated employees into the employees array using whichever method you prefer.

console.log(employees)
    // MyClass.allInstances = [];
    // MyClass.allInstances.push(this);