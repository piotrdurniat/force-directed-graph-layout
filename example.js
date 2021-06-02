let graph;

graph = new Graph();
const unDirectedEdges = [
    ["A", "B"],
    ["A", "D"],
    ["A", "E"],
    ["B", "C"],
    ["D", "E"],
    ["E", "F"],
    ["E", "C"],
    ["C", "F"],
];

graph.addVertex("H");
graph.addEdges(unDirectedEdges);

console.log("Vertices:");
console.table(graph.getVertices());

console.log("Edges:");
console.table(graph.getEdges());

console.log("Adjacency List:");
console.table(graph.getAdjacencyList());

console.log("Adjacency Matrix:");
console.table(graph.getAdjacencyMatrix());
