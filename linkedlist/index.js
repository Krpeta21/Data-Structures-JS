const LinkedList = require('./linkedlist')

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}

const queue = new LinkedListQueue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
console.log(queue.getSize(),'Size')
queue.print()
