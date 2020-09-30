input()
function input() {
    while (true) {
        let num = prompt("Enter a positive integer")
         num = Number(num)
         this.num = num
        if (!(Number(num) === num && num % 1 !== 0) && Number.isInteger(num) && num > 0) break
    }
    nextPrime.call(this, num);
    alert('For n = ' + num + ' prime number are ' + printPrime(num))
}
function nextPrime(num) {
    for (let i = 2;i < num; i++){
        if (num % i === 0) {
            return false
        }
    }
    return true;
}
function printPrime(n) {
    let arr = [2];
    if (n <2 ) return "[ ]"
    for (let i = 3; i < n; i += 2) {
        if (nextPrime(i)) {
            arr.push(i);
        }
    }
    return arr
}  