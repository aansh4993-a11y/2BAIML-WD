class Person {
    static totalPersons = 0;
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
        Person.totalPersons++;
    }
    displayDetails(){
        console.log("ID   : " + this.id);
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
    }
    static showTotalPersons(){
        console.log("Total persons registered in the system: " + Person.totalPersons);
    }
}
class Doctor extends Person{
    constructor(id, name, age, specialization, consultationFee){
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }
    displayDetails(){
        super.displayDetails();
        console.log("Role : Doctor");
        console.log("Specialization   : " + this.specialization);
        console.log("Consultation Fee : Rs. " + this.consultationFee);
    }
}
class Patient extends Person {
    constructor(id, name, age, disease, roomNo){
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }
    displayDetails(){
        super.displayDetails();
        console.log("Role : Patient");
        console.log("Disease : " + this.disease);
        console.log("Room No : " + this.roomNo);
    }
}
const doc1 = new Doctor(1, "Dr. Aman Verma", 45, "Cardiology", 500);
const doc2 = new Doctor(2, "Dr. Priya Singh", 38, "Neurology", 600);
const pat1 = new Patient(101, "Rahul Sharma", 30, "Fever", 201);
const pat2 = new Patient(102, "Rohit Kumar", 25, "Fracture", 202);
console.log("Doctor Records");
doc1.displayDetails();
doc2.displayDetails();
console.log("Patient Records");
pat1.displayDetails();
pat2.displayDetails();
Person.showTotalPersons();