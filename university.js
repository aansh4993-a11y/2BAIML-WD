class Student {
    static totalStudents = 0;
    constructor(rollNo, name, marks){
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }
    displayResult() {
        console.log("Roll No : " + this.rollNo);
        console.log("Name    : " + this.name);
        console.log("Marks   : " + this.marks);
        if (this.marks >= 40){
            console.log("Result :Pass");
        } else {
            console.log("Result :Fail");
        }
        console.log("     ");
    }
    static displayTotal() {
        console.log("Total students created: " + Student.totalStudents);
    }
}
const s1 = new Student(101, "Aman Verma", 78.5);
const s2 = new Student(102, "Priya Singh", 35);
const s3 = new Student(103, "Rahul Sharma", 62);
s1.displayResult();
s2.displayResult();
s3.displayResult();
Student.displayTotal();