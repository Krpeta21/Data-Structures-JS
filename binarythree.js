class BinaryThree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const root = new BinaryThree(1);
root.left = new BinaryThree(2)
root.right = new BinaryThree(3)
console.log(root)