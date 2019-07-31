function sumFn (x) {
    let sumPositive = 0
    let sumNegative = 0

    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            sumPositive += x[i]
        } else {
            sumNegative += x[i]
        }
    }
    return [sumPositive, sumNegative]
}

console.log(sumFn([2, 8, -7, -8, 5, -3]));