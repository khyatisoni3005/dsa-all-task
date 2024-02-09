function bubble() {
    let arr = [65, 67, 643, 3, 43, 4, 7, 8, 9, 98, 89, 876, 55, 433, 232]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubble());