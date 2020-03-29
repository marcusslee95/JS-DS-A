class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    this.last.next = newNode;
    this.last = newNode;
    this.size++;
    return this.size;
  }
  dequeue(){
    let temp = this.first.next; //save what new head would be
    this.first.next = null;
    let temp2 = this.first;
    this.first = temp;
    return temp2;
  }
}
