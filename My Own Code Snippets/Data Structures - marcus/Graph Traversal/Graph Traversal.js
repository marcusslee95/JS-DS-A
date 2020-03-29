class Graph Traversal{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(wtvWantVertexValToBe){
    // this.adjacencyList.set(wtvWantVertexValToBe, []);
    if (!this.adjacencyList[wtvWantVertexValToBe]) {
      this.adjacencyList[wtvWantVertexValToBe] = [];
    }
  }
  addEdge(v1,v2){//think of the inputs as saying "adding an edge" b/w these two vertices
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1,v2){
    this.adjacencyList[v1].filter(function(aVertexThatv1IsConnectedTo){
      return aVertexThatv1IsConnectedTo !== v2;
    });
    this.adjacencyList[v2].filter(function(aVertexThatv2IsConnectedTo){
      return aVertexThatv2IsConnectedTo !== v1;
    });
  }
  removeVertex(v){
    //remove connection both ways for each thing V is connected to
    let allEdgesOfV = this.adjacencyList[v];
    for (let edgeOfV of allEdgesOfV){
      this.removeEdge(edgeOfV, v);
    }

    //delete the key <- this is more of a formality don't really need it but keeps it neat
    delete this.adjacencyList[v];
  }

  //PART 2: TRAVERSAL
  //pseudocoded dfs -> 20/80 rule
  dfs() {visited = {}; result = {}; dfs(aNode); return result}
}
  dfsHelper(node) {if (node !== null){return null;}//ez scenario where no need to repeat logic / know answer immediately
    visited.push (node); results.push(node); for neigh of neighbors: if neigh is not visited -> dfsHelper(neighbor); //repeat logic
  }
  dfsIter(start){
    //1. set up
    result = [];
    visited = {};
    nodesToVisitNextStack = [start];

    while (nodesToVisitNextStack.length >= 0){
      //2. visit the node itself
      let nodeYoureAt = nodesToVisitNextStack.pop();
      visited[nodeYoureAt] = true;
      result.push(nodeYoureAt);
      //3. go to neighbor
      this.adjacencyList[start].forEach((neighbor) => {
        if (visited[neighbor] === null){
          nodesToVisitNextStack.push(neighbor);
        }
      });
    return result;
  }
  bfs(start){
    //set up
    result = [];
      visited = {};
      queueRepresentingSeqInWhichWillVisitNodes = [start];
      while (queueRepresentingSeqInWhichWillVisitNodes.length){
        let currNode = queueRepresentingSeqInWhichWillVisitNodes.shift();
        //visit the node
        visited[currNode] = true;
        result.push(currNode);
        this.adjacencyList[currNode].forEach((neighbor) => {
          if (visited[neighbor]){queueRepresentingSeqInWhichWillVisitNodes.push(neighbor);}
        });
      }
    }
  }
  }
