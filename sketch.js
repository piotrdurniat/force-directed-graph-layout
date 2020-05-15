let graph;

function setup() {
    graph = new Graph();

    graph.addVertex("H");

    const edges = [
        ["A", "B"],
        ["A", "D"],
        ["A", "E"],
        ["B", "C"],
        ["D", "E"],
        ["E", "F"],
        ["E", "C"],
        ["C", "F"],
    ];

    graph.addEdges(edges);

    graph.consoleTableVertices();
    graph.printAdjecencyTable();

    noDraw();
}
