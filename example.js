let graph;

function setup() {
    createCanvas(800, 800);
    graph = new Graph();

    example1();

    console.log(graph);

    console.log("Vertices:");
    console.table(graph.getVertices());

    console.log("Edges:");
    console.table(graph.getEdges());

    console.log("Adjacency List:");
    console.table(graph.getAdjacencyList());

    console.log("Adjacency Matrix:");
    console.table(graph.getAdjacencyMatrix());
}

function example1() {
    const max = 100;

    for (let m = 1; m <= max; m++) {
        for (let n = 1; n <= max; n++) {
            if (m !== n && Math.abs(m - n) < 3) {
                const v1 = `a${m}`;
                const v2 = `a${n}`;

                console.log("Adding edge");
                graph.addEdge(v1, v2);
            }
        }
    }
}

function draw() {
    background(51);
    graph.show();
}

function mousePressed() {
    graph.mousePressed();
}

function mouseReleased() {
    graph.mouseReleased();
}

function mouseDragged() {
    graph.mouseDragged();
}
