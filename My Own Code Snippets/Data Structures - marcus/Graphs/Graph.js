class Graph{
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
}
