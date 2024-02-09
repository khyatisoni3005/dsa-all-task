// stack 

class Stack {
    constructor() {
        this.arr = [];
    }
    push(val) {
        this.arr[this.arr.length] = val
    }
    pop() {
        this.arr.pop()
    }
    isEmpty() {
        if (this.arr.length === 0) {
            console.log('stack is underflow');
        }
    }
    print() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr);

        }
    }
    last() {
        console.log(this.arr[this.arr.length - 1], "last");
    }
    sLast() {
        console.log(this.arr[this.arr.length - 2], " second last");
    }
    clear() {
        this.arr = []
    }
}

const stack = new Stack()


stack.push(7);
stack.push(5);
stack.push(2);
stack.push(6);
stack.pop();
stack.clear();
stack.print()
stack.isEmpty()
// stack.last()
// stack.sLast()

