class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
constructor(){ //essentially the same as a linkedlist (i.e. first is head, last is tail)
  this.first = null;
  this.last = null;
  this.size = 0;
}

method(){

}
push(val){
  let newFirst = new Node(val);
  if (this.size === 0){
    this.first = newFirst;
    this.last = newFirst;
    this.size++;
  } else {
    let temp = this.first;
    this.first = newFirst;
    this.first.next = temp;
    this.size++;
  }
}
pop(){
  if (this.size === 1){
    let temp = this.first;
    this.first = null;
    this.last = null;
    this.size--;
    return temp;
  } else if (this.size === 0){
    return null;
  } else {
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}
}
