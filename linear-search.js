// linear search 


function linear() {
    let arr = [43, 57, 6, 7, 56, 74, 3, 4, 3, 546, 79, 9, 7, 4, 21, 1, 23, 4, 6, 8]
    let target = 56
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }

    }
    return -1
}
console.log(linear());
