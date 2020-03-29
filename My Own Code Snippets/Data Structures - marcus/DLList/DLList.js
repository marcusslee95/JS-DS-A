// Node
// -val
// -next
// -prev
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DLList
// -head
// -tail
// -length
class DLList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    //if empty
    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
    //if not empty
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    //Not sure why colt returned this.... cuz we're just modifyinng the thing. which we already do above.
    return this;
  }
  pop(){
    var prevTail = this.tail;
    if (this.length === 0){
      return undefined;
    } else if (this.length === 1){
      this.head = null;
      this.tail = null;
      this.length = 0;
      return prevTail;
    } else {
      var prevTail = this.tail;
      this.tail = this.tail.prev; // change tail to 2nd last node
      this.tail.next = null; // eliminate connection to last node
      this.head.prev = this.tail;
      prevTail.prev = null;
      this.length--;
    return prevTail;
  }
  }
  shift(){
    //move head up then disconnect ties to previous head
    var prevHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    prevHead.next = null;
    this.length--;
    return prevHead;
  }
  unshift(val){
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
    this.length++;
    return this;
  }
  get(position){
    if (position < this.length / 2){//start from head cuz closer to it
      let temp = this.head;
      for (let i = 0; i < position; i++){//this.length times
        temp = temp.next;
      }
        return temp;
    } else {//start from tail
      let temp = this.tail;
      for (let i = 0; i < this.length - position; i++){//distance between position and this.tail will be
        // this.length - position . aka. that's the number of times have to go through this loop
        temp = temp.prev;
      }
      return temp;
    }


    //Ignore below: forgot what get does.
    //go through list and see if any node has matching val.
    //If gone through the list and not there then return undefined or something.

    // let temp = this.head;
    // for (let i = 0; i < this.length; i++){//this.length times
    //   if (temp.val === val){
    //     return temp;
    //   }
    // }
    // return undefined; //only come here if didn't find match.
    // if (this.head.val === val){
    //   return this.head;
    // }
  }
  set(position, val){
    let nodeOfInterest = this.get(position);
    nodeOfInterest.val = val;
  }
  insert(position, val){
    // creating new node and then getting to correct position and then assigning pointers properly
    let toBeInserted = new Node(val);
    let nodePreviouslyInThisPosition = this.get(position - 1);
    let tempOfNodeComingAfter = nodePreviouslyInThisPosition.next;
    nodePreviouslyInThisPosition.next = toBeInserted;
    tempOfNodeComingAfter.prev = toBeInserted;
    toBeInserted.next = tempOfNodeComingAfter;
    toBeInserted.prev = nodePreviouslyInThisPosition;
    this.length++;
  }
  remove(position){
    let prevNode = this.get(position-1);
    let afterNode = prevNode.next.next;
    let removingNode = prevNode.next;
    //using left to right pointer reassignment sequence
    prevNode.next = afterNode;
    removingNode.prev = null;
    removingNode.next = null;
    afterNode.prev = prevNode;
    this.length--;
  }
}

//Test 1 START: see if can mimic the idea of dllist
// let first = new Node(4);
// first.next = new Node(19);
// first.next.prev = first;
// console.log(first);

//Test 1 END


//Test 2 START: validate push method working
// let list = new DLList();
// list.push(99);
// // console.log(list);
// list.push(100);
// // console.log(list);
// list.push("Last item:");
// console.log(list);
//Test 2 END

//*STOPPED WRITING TESTS HERE BECAUSE I STARTED WRITING OUT DLLIST CLASS IN CHROME DEV TOOLS CUZ EASIER TO TEST THERE.
