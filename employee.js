class employee{
    constructor(empId,empName,basicSalary){
        this.id = empId;
        this.name = empName;
        this.basicSalary = basicSalary;
}
calculateSalary(){
    return this.basicSalary;
}
displaySalary(){
    console.log("Employee ID : " + this.id);
    console.log("Employee Name : " + this.name);
    console.log("Employee Salary : " + this.calculateSalary());
}
}
class manager extends employee{
    constructor(empId,empName,basicSalary,bonus){
        super(empId,empName,basicSalary);
        this.bonus = bonus;
    }
    calculateSalary(){
        return this.basicSalary + this.bonus;
    }
}
const emp1 = new employee(101,"Ansh Agarwal",500000);
const emp2 = new employee(102,"Ashna Mehta",450000);

const mgr1 = new manager(201,"Glossy Gupta",70000,10000);
emp1.displaySalary();
emp2.displaySalary();
mgr1.displaySalary();
