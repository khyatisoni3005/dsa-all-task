let arr = [4, 5, 6, 7, 8, 9, 12, 34, 56, 78, 89, 90]
let element = 9
let head = 0
let tail = arr.length - 1
function eleFound(arr, element, head, tail) {
    let mid = Math.floor((head + tail) / 2)
    if (head > tail) {
        return false
    }
    if (arr[mid] === element) {
        return true
    }
    if (arr[mid] < element) {
        return eleFound(arr, element, mid + 1, tail)
    }
    else {
        return eleFound(arr, element, head, mid - 1)
    }
}
const result = eleFound(arr, element, head, tail);
console.log(result);