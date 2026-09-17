console.log("BANK MANAGEMENT SYSTEM");
let bankAccount = {
    AccountHoldername: "Ansh Agarwal",
    AccountNumber: 224455997,
    AccountBalance: 10000
}
function withdraw(amount) {
    if (amount <= bankAccount.AccountBalance){
        bankAccount.AccountBalance -= amount;
        console.log("withdrawal successful. New balance: " + bankAccount.AccountBalance);
    } else{
        console.log("insufficient balance. Withdrawal failed.");    
    }

    console.log("Account Holder Name: " + bankAccount.AccountHoldername);
    console.log("Account Number: " + bankAccount.AccountNumber);

    let amount = parseFloat(prompt("Enter the amount to withdraw:"));
    console.log("Amount to withdraw: " + amount);

    console.log("Account Balance before withdrawal: " + bankAccount.AccountBalance);
    
};