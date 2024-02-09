function selection() {
    let arr = [3, 46, 787, 65, 33, 56, 78, 99, 6, 33, 45, 6, 8, 9]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(selection());