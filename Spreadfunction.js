console.log("SPREAD FUNCTION EXAMPLE");
function sum(...values)
{
    let sum=0;
    for (let i in values)
    {
        sum+=values[i];
    }
    console.log(sum);
};
let arr=[1,2,3,4,5];
sum(arr);