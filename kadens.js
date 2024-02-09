function kadens() {
    let arr = [4, 7, 8, -4, 8, -1, -4, 6, -20, -9, 2]
    let sum = 0
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}
console.log(kadens());

