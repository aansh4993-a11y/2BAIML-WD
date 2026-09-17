let F= "firstName";
let L= "LastName";
let data=
{
    [F]: "Ansh",
    [L]: "Agarwal",

}
console.log(data.firstName);
console.log(data.LastName);
Show(){
    console.log(this.firstName);
    console.log(this.LastName);
}

let Data = [ "Ansh",101,201001,"Kavi Nagar"]
let Name = Data[0];
let Roll = Data[1];
let Pinc = Data[2];
let city = Data[3];l

let[Name,Roll,Pinc,city]=Data;

console.log(Name);
console.log(Roll);
console.log(Pinc);
console.log(city);
