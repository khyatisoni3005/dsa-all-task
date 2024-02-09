class Node {
    constructor(data) {
        this.head = {
            data: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }
    add(data) {
        const node = {
            data: data,
            next: null
        }
        this.tail.next = node  // [5->8, 8->9, 9->10, 10->12, 12]
        this.tail = node
        this.size += 1
    }
    travel() {
        let count = 0
        let current = this.head
        while (current < this.size) {
            console.log(current);
            current = current.next
            console.log(current);
            count++
        }
    }
}

const node = new Node(5)
node.add(10)
node.add(20)
node.add(60)
node.add(70)
node.travel()

console.log(node);