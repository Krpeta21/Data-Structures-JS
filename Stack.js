class Stack {
    constructor(){
            this.items =[];
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length -1];
    }
}
const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(`Stack push: ${stack.items}`)
stack.pop()
console.log(`Stack pop: ${stack.items}`)
console.log(stack.peek())