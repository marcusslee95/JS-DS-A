class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(v){
    if (this.adjacencyList[v] === null){//think this is only necessary if you don't want nodes w/the same values
      this.adjacencyList[v] = [];
    }
  }
  addEdge(newlyAddedVert, prevExistingVert, weightBWTwo){
    this.adjacencyList[prevExistingVert].push({thingToBeConnectedTo: newlyAddedVert, connection: weightBWTwo});
    this.adjacencyList[newlyAddedVert].push({thingToBeConnectedTo: prevExistingVert, connection: weightBWTwo});
  }
  Djikstras(start, end){
    //START: 1. init
    let obj = {
      A: 0,
      B: Infinity,
      C: Infinity,
      D: Infinity
      E: Infinity,
      F: Infinity
    };
    let pq = new PriorityQueue();
    pq.enqueue("A", 0);
    pq.enqueue("B", Infinity);
    pq.enqueue("C", Infinity);
    pq.enqueue("D", Infinity);
    pq.enqueue("E", Infinity);
    pq.enqueue("F", Infinity);

    let prev = {
      A: null,
      B: null,
      C: null,
      D:null,
      E: null,
      F: null
    };
    let visited = [];
    //END: init

    //START: 2. visit vertices shortest dist from start / the repeated process
    while(pq.length > 0){//aka. while there are verts to still visit
      let vertexToVisit = pq.dequeue();
      visited.push(vertexToVisit); // add to visited
      for (neighbor in this.adjacencyList[vertexToVisit]) {//calculate shortest distance neighbors have to starting
        if (neighbor not in visited) {//if visited then I guess no need to calculate distance again cuz i guess shortest distance already found
          let distFromVertToNeighbor = neighbor.connection;
          let distFromStartToVert = lookAtPrevObjectAndGoUpChainFromVertToStartAddingUpWeightOfEachEdge;
          let distFromStartToNeighbor = distFromVertToNeighbor + distFromStartToVert;
          if (distFromStartToNeighbor < oldDistFromStartToVert){//what to do when calculated new shortest distance to start -> update objects
            obj[neighbor] = distFromStartToNeighbor;
            pq.enqueue(neighbor, distFromStartToNeighbor);
            prev[neighbor] = vertexToVisit;
          }
        }
      }
    }
  //END: visit vertices shortest dist from start / the repeated process

    //START: 3. create sequence of vert by looking at prev object
    let returnSeq = [end];
    let temp = prev[end];
    returnSeq.unshift(prev[end]); //adding to the front
    returnSeq.unshift(temp[end]);
    //repeat
    //END: create sequence of vert by looking at prev object
  }
}
