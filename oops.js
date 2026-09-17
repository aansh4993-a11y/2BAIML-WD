class Student {
    name;
    rollno;
    constructor(name, rollno) {
        this.name = name;
        this.rollno = rollno;
        console.log(name);
        console.log(rollno);
    }
    display() {
        console.log(this.name);
        console.log(this.rollno);
    }
}
let s1 = new Student("Ansh", 11);
let s2 = new Student("Mayank", 12);
s1.display();
s2.display();