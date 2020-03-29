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
  insert(val, partOfTreeYouWantToInsertInto){
    //if empty
    if(!partOfTreeYouWantToInsertInto){
      let newNode = new Node(val);
      partOfTreeYouWantToInsertInto = newNode; //wonder if connection b/w parent and child will be created 
    }else {
      if (val < this.root.val){
        //run insert method on relevant half of the tree
        insert(val, partOfTreeYouWantToInsertInto.left);
      }else {
        insert(val, partOfTreeYouWantToInsertInto.right);
      }
    }
  }
/*
  //haven't tested out / confirmed insert. Might not work + might be redundant code
  insert(val){
    let newNode = new Node(val);
    if (!this.root){
      this.root = newNode;
    } else {
      if (newNode.val < this.root.val){
        //know we have to do insert on the left branch: would that mean I'd use something like insert(val, this.root.left)

        //but before we do that -> check if there was no node can just insert it
        if (!this.root.left){
          this.root.left = newNode;
        }
        insertHelper(newNode, this.root.left);
      } else {
        if (!this.root.right){
          this.root.right = newNode;
        }
        insertHelper(newNode, this.root.right);
      }
    }
    return this.root; //hopefully new node has been inserted
  }
  insertHelper(nodeToBeInserted, partOfTreeYouWantToInsertInto){
    if (nodeToBeInserted.val < partOfTreeYouWantToInsertInto.val){
      if (!partOfTreeYouWantToInsertInto.left) {
        partOfTreeYouWantToInsertInto.left = nodeToBeInserted;
      } else {
      insertHelper(nodeToBeInserted, partOfTreeYouWantToInsertInto.left);
      }

    }
    else {
      if (!partOfTreeYouWantToInsertInto.right){
        partOfTreeYouWantToInsertInto.right = nodeToBeInserted;
      } else {
        insertHelper(nodeToBeInserted, partOfTreeYouWantToInsertInto.right);
      }
    }
  }
  */
}
