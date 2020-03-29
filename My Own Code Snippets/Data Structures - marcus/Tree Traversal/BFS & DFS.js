class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  BFS(){
    let goingToVisit = [];
    let orderVisited = [];
    goingToVisit.push(this.root);
    while (orderVisited.length !== 0){

      let visit = goingToVisit.shift(); //mimicking queue FIFO
      orderVisited.push(visit);

      //check and add children if exist
      if (visit.left !== null){
        goingToVisit.push(visit.left)
      }
      if (visit.right !== null){
        goingToVisit.push(visit.right)
      }

    }
    return orderVisited;
  }
  DFSPreOrder(){
    //MY 1ST TRY: START
    // - My Idea of the main steps of the algo:
    // - 1. Create variable that’ll store order visited
    // - 2. Add root to that variable
    // - 3. Go through everything on the left side
    // - 4. Ditto right side
    // - 5. Return the variable
    // let orderVisited = [];
    // orderVisited.push(root); // represents that it has been visited
    // DFSPreOrder(root.left); //go through everything on left
    // DFSPreOrder(root.right);
    // return orderVisited;
    //MY 1ST TRY: END

    let orderVisited = [];
    function traverse(someNode){
      orderVisited.push(someNode);
      if (someNode.left){traverse(someNode.left);}
      if (someNode.right){traverse(someNode.right);}
    }
    traverse(this.root); //same 3 key parts: 1. visit the node 2. go through all of the nodes on left 3. go through all on right
    return orderVisited;
  }
  DFSPostOrder(){
    let orderVisited = [];
    function traverse(someNode){//go through all nodes on left then all on right before visiting the node
      if (someNode.left){traverse(someNode.left);}
      if (someNode.right){traverse(someNode.right);}
      orderVisited.push(someNode);
    }
    traverse(this.root);
    return orderVisited;
  }
  DFSInOrder(){
    let orderVisited = [];
    function traverse(someNode){
      if (someNode.left) traverse(someNode.left);
      orderVisited.push(someNode); //represents you visited the node
      if (someNode.right) traverse(someNode.right);
    }
    traverse(this.root);
    return orderVisited;
  }
}
