let graph;

let attractForce = 0.04;
let attractSlider;
let repelSlider;
let repelForce = 50000;

function setup() {
    createCanvas(800, 800);
    graph = new Graph();

    attractSlider = createSlider(0.01, 0.08, attractForce, 0.001);
    attractSlider.input(updateAttractValue);

    repelSlider = createSlider(1000, 500000, repelForce, 10);
    repelSlider.input(updateRepelValue);

    example3();

    graph.vertices[0].pinned = true;
}

function updateAttractValue() {
    attractForce = attractSlider.value();
}
function updateRepelValue() {
    repelForce = repelSlider.value();
}

function printStats() {
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

                graph.addEdge(v1, v2);
            }
        }
    }
}

function example3() {
    const max = 8;

    for (let m = 1; m <= max; m++) {
        for (let n = 1; n <= max; n++) {
            for (let k = 1; k <= max; k++) {
                for (let l = 1; l <= max; l++) {
                    if (m * n != k * l) {
                        const v1 = `a${m}`;
                        const v2 = `a${n}`;

                        graph.addEdge(v1, v2);
                    }
                }
            }
        }
    }
}

function example4() {
    const max = 10;

    for (let m = 1; m <= max; m++) {
        for (let n = 1; n <= max; n++) {
            if (m != n && abs(m - n) < 3) {
                const v1 = `a${m}`;
                const v2 = `a${n}`;

                graph.addEdge(v1, v2);
            }
        }
    }
}

function example5() {
    const max = 8;

    for (let m = 1; m <= max; m++) {
        for (let n = 1; n <= max; n++) {
            for (let k = 1; k <= max; k++) {
                for (let l = 1; l <= max; l++) {
                    if (m + n != k + l) {
                        const v1 = `a${m}`;
                        const v2 = `a${n}`;

                        graph.addEdge(v1, v2);
                    }
                }
            }
        }
    }
}

function example2() {
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
}

function draw() {
    background(51);
    graph.show();
    graph.update();
    graph.organize();
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

function keyPressed() {
    if (keyCode == 80) {
        graph.pin();
    }
}
