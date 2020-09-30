//  list = readInput(); //getInteger while loopจนกว่าจะได้interger// positiveมั้ย
//displayStats(list); //ternary operationM?? >>function min,max,ave
let arrNum = [];
userInput: while (true) {
    num = +prompt("Enter an integer (a negative integer to quit):");
    if (parseInt(num) == parseFloat(num)) {
        if (num >= 0) {
            arrNum.push(num)
        }
        if (num < 0) {
            break
        }
    }
}

function readInput() {
    return [...arrNum].sort(function (a,b) { return (a-b) })
}
function displayStats(arr) {
    alert("for the list " + arr +", the average is " + getAvg(arr) + ", the minimum is " + Math.min(...arr) + ", and the maximum is " + Math.max(...arr))
}
function getAvg(grade) {
    const total = grade.reduce((acc, c) => acc + c, 0)
    return total / grade.length;
}
let list = readInput();
displayStats(list);

