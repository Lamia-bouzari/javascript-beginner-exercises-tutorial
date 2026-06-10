let total = prompt('How many km are left to go?');

// Your code below:
if (total > 100) {
    console.log("we stiil have a bit of driving left to go");
}
else if (total>50) {
    console.log("we will be there in 5 minutes");
}
else {
    console.log("I'm parking. I'll see you right now");
}