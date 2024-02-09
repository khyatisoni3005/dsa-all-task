class Queue {
    constructor() {
        this.queue = []
        this.head = 0
        this.tail = this.queue.length
        this.size = 5
    }
    head() {
        console.log(this.queue[this.head]);
    }
    tail() {
        console.log(this.queue[this.queue.length - 1]);
    }
    add(val) {
        if (this.queue.length < this.size) {
            this.queue.push(val)
        }
        else {
            console.log("queue is overload");
        }
    }
    remove() {
        if (this.queue.length - 1) {
            this.queue.shift()
        }
        else {
            console.log("minimum size reached");
        }
    }
    print() {
        console.log(this.queue);
    }

    isEmpty() {
        if (this.queue.length === 0) {
            console.log("quue is empty");
        }
    }
}

const q = new Queue()
q.add(4)
q.print()