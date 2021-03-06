class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PQ {
  constructor(){
    values: [];
  }
  enqueue(val, priority){
    //START: pt1 - Add to end
    let newElement = new Node(val, priority);
    this.values.push(newElement);
    //END: pt1 - Add to end

    //START: pt2 - bubble up
    let posOfNewVal = this.values.length - 1;
    let posOfParent = (posOfNewVal - 1) / 2
    let parent = this.values[posOfParent];

    while (posOfNewVal !== 0){
      if (newElement.priority > parent.priority){
        swap(this.values, posOfNewVal, posOfParent);
        //updating values now that swapped
        posOfNewVal = posOfParent;
        posOfParent = (posOfNewVal - 1) / 2
        parent = this.values[posOfParent];
      }
      else {
        break;
      }
    }
    //END: pt2 - bubble up
  }
  swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  dequeue(){
    let root = this.takeOutRoot();
    this.replaceRootWithLast(); //root will have been changed by this
    this.sinkDownNewRoot();
    return root;
  }
  takeOutRoot(){
    return this.values.shift(); //deletes and returns 1st index
  }
  replaceRootWithLast(){
    let newRoot = this.values.pop(); //get and delete value of last
    this.values.unshift(newRoot); //add to front
  }
  sinkDownNewRoot(){
    let newRoot = this.values[0];
    let posOfNewRoot = 0;

    while(posOfNewRoot !>= this.values.length - 1){//this is end condition because newRoot's index will increase each time it updates and if it's the last index then you've sunk all the way down

      if (newRoot.priority > this.values[(posOfNewRoot + 1) / 2].priority && newRoot.priority > this.values[(posOfNewRoot + 2) / 2].priority ){
        break; //aka. end function
      } else if (newRoot.priority < this.values[(posOfNewRoot + 1) / 2].priority && newRoot.priority < this.values[(posOfNewRoot + 2) / 2].priority){
        //swap w/larger one
        if (this.values[(posOfNewRoot + 1) / 2].priority > this.values[(posOfNewRoot + 2) / 2].priority){
          let temp = this.values[(posOfNewRoot + 1) / 2];

          //Swapping values
          this.values[(posOfNewRoot + 1) / 2] = newRoot;
          this.values[posOfNewRoot] = temp;

          //Updating index of thing that's sinking down
          posOfNewRoot = (posOfNewRoot + 1) / 2;
        } else {
          let temp = this.values[(posOfNewRoot + 2) / 2];

          //Swapping values
          this.values[(posOfNewRoot + 2) / 2] = newRoot;
          this.values[posOfNewRoot] = temp;

          //Updating index of thing that's sinking down
          posOfNewRoot = (posOfNewRoot + 2) / 2;
        }
      } else if (newRoot.priority < this.values[(posOfNewRoot + 1) / 2].priority){
        //swap
        let temp = this.values[(posOfNewRoot + 1) / 2];

        //Swapping values
        this.values[(posOfNewRoot + 1) / 2] = newRoot;
        this.values[posOfNewRoot] = temp;

        //Updating index of thing that's sinking down
        posOfNewRoot = (posOfNewRoot + 1) / 2;
      } else if(newRoot.priority < this.values[(posOfNewRoot + 2) / 2].priority){
        //swap
        let temp = this.values[(posOfNewRoot + 2) / 2];

        //Swapping values
        this.values[(posOfNewRoot + 2) / 2] = newRoot;
        this.values[posOfNewRoot] = temp;

        //Updating index of thing that's sinking down
        posOfNewRoot = (posOfNewRoot + 2) / 2;
      }
    }
  }
}
