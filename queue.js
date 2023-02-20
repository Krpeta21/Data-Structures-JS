class Queue{
    constructor(){
        this.items = []
    }
    enqueue(item){
        this.items.push(item)
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){
        return this.items[0]
    }
}
const queue = new Queue;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(`Queue: ${queue.items}`)
queue.dequeue()
console.log(`Dequeue: ${queue.items}`)
console.log(queue.peek())
