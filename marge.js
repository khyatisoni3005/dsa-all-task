const arr = [3, 56, 78, 7, 5, 3, 6]
let start = 0
let end = arr.length - 1

function divide() {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        let left = []
        for (let i = 0; i <= mid; i++) {
            left.push(arr[i])
        }
        let ls = 0
        let le = left.length - 1

        let right = []
        for (let i = mid; i <= end; i++) {
            right.push(arr[i])

        }

        let rs = 0
        let re = right.length - 1

        divide(left, ls, le)
        divide(right, rs, re)

        console.log(left);
        console.log(right);
        console.log(arr);

        merge(left, right)

    }
}

divide(arr, start, end)