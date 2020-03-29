class Node{
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

class SLList{
  constructor(){
    //what are the properties I want this to have?
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(num){//insert to the end
    //if didn't have tail variable you'd have had to find some way of knowing you're at the end i.e. temp = head then check if temp.next === null
    let node = new Node(num);

    if (this.head === null){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop(){
    //main thing need to do: loop through the nodes using two pointers
    if (this.length === 0){return;}
    else if (this.length === 1){
      this.length--;
      return this.head;
    } else {//at least 2 nodes
      let prev = this.head;
      let eventualLast = this.head.next;
      while(eventualLast.next !== null){
        eventualLast=eventualLast.next;
        prev=prev.next;
      }//eventualLast is the last node
      let rv = this.tail;
      prev.next = null; //lose the connection to "Get rid" of last node
      this.tail = prev; //set 2ndtolast as tail
      this.length--;
      return rv;
    }
  }
  shift(){
    if (this.length ===0){return undefined;}
    let rv = this.head;
    this.head = this.head.next;
    this.length--;
    rv.next = null;
    return rv;
  }
  unshift(num){
    let node = new Node(num);
    if (this.length===0) {
      this.head = node;
      this.tail = node;
    }else {
    node.next = this.head;
    this.head = node;
  }
  this.length++;
    return this;
  }
  get(num){
    if (this.length <= 0 || num >= this.length){//asking for a node that doesn't exist
      return undefined;
    }//
    let temp = this.head;
    for (let i = 0; i < num; i++){
      temp = temp.next;
    }//should be at desired node rn
    return temp;
  }
  set(num, position){
    let nodeToBeChanged = this.get(position);
    if (!nodeToBeChanged){return false;} //invalid position input
    else {
      nodeToBeChanged.val = num;
      return true;
    }
  }
  insert(num, pos){
    //     - 1. Create the node
    let node = new Node(num);

    //conditionals
    if (pos < 0 || pos > this.length){//invalid insert
      return false;
    } else if (pos === 0){
      node.next = this.head;
      this.head = node;
    } else {
      // - 2. Link previous node to this node (get previous node by calling get function that we already created)
      let prev = this.get(pos-1);
      let temp = prev.next;
      prev.next = node;
      // - 3. Link this node to the one that should come after it
      node.next = temp;
    }
    this.length++;
return true;
  }
  remove(pos){
    //Ignored the if cases
    //Main thing: Get the node before it and set it’s next to be the next of the current node
    let prev = this.get(pos - 1);
    let rv = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return rv;
  }
  //**Skipped writing code for reversing
}


let list1 = new SLList();
// list1.push(32);
// list1.push(23);
// list1.push("mamamia");
// list1.pop();

list1.push(32);
console.log(list1);
list1.push(23);
console.log(list1);
list1.push("mamamia");
console.log(list1);
list1.pop();
list1.pop();
console.log(list1);
