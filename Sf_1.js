function calculate(...marks) {
    let sum = 0;

    // Calculate sum
    for (let mark of marks) {
        sum += mark;
    }

    // Calculate percentage
    let percentage = (sum / 500) * 100;

    console.log("Sum =", sum);
    console.log("Percentage =", percentage + "%");
}

// Calling the function
calculate(80, 75, 90, 85, 70);