let graph = new Graph();

let attractForce = 0.04;
let attractSlider;
let repelSlider;
let repelForce = 50000;

let organize = false;
let button;

let automaticLabel = 0;

function setup() {
    createCanvas(800, 600);
    createP("Click and drag on a vertex to move it");
    createP("Press 'p' while hovering over a vertex to pin it");
    createP(
        'Open the console to add or remove vertices and edges (eg. graph.addVertex("A");)'
    );

    button = createButton("");
    button.mousePressed(toggleSimulation);

    createP("Attraction force:");

    attractSlider = createSlider(0.01, 0.08, attractForce, 0.001);
    attractSlider.input(updateAttractValue);
    createP("Repulsive force:");
    repelSlider = createSlider(1000, 500000, repelForce, 10);
    repelSlider.input(updateRepelValue);

    createP("");

    let exampleButton1 = createButton("example 1");
    exampleButton1.mousePressed(example1);
    let exampleButton2 = createButton("example 2");
    exampleButton2.mousePressed(example2);
    let exampleButton3 = createButton("example 3");
    exampleButton3.mousePressed(example3);
    let exampleButton4 = createButton("example 4");
    exampleButton4.mousePressed(example4);
    let exampleButton5 = createButton("example 5");
    exampleButton5.mousePressed(example5);
    let exampleButton6 = createButton("example 6");
    exampleButton6.mousePressed(example6);

    example2();
    toggleSimulation();
}

function toggleSimulation() {
    if (organize) {
        button.html("Run simulation");
    } else {
        button.html("Stop simulation");
    }
    organize = !organize;
}

function clearGraph() {
    graph = new Graph();
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
    clearGraph();
    const max = 20;

    for (let m = 1; m <= max; m++) {
        for (let n = 1; n <= max; n++) {
            if (m !== n && Math.abs(m - n) < 3) {
                const v1 = `a${m}`;
                const v2 = `a${n}`;

                graph.addEdge(v1, v2);
            }
        }
    }
    graph.vertices[0].pinned = true;
}

function example2() {
    clearGraph();

    for (let i = 1; i <= 12; i++) {
        graph.addVertex(i);
    }

    const edges = [
        [1, 11],
        [1, 10],
        [1, 4],
        [2, 11],
        [2, 4],
        [2, 8],
        [2, 12],
        [3, 8],
        [3, 12],
        [3, 7],
        [4, 5],
        [5, 9],
        [5, 8],
        [6, 12],
        [6, 7],
        [6, 11],
        [8, 9],
        [10, 11],
    ];
    graph.addEdges(edges);
    graph.vertices[0].pinned = true;
}

function example3() {
    clearGraph();

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
    graph.vertices[0].pinned = true;
}

function example4() {
    clearGraph();
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
    graph.vertices[0].pinned = true;
}

function example5() {
    clearGraph();
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
    graph.vertices[0].pinned = true;
}

function example6() {
    clearGraph();
    const max = 10;

    for (let m = 1; m <= max; m++) {
        for (let n = 1; n <= max; n++) {
            const v1 = `a${m}`;
            const v2 = `a${n}`;

            graph.addEdge(v1, v2);
        }
    }
    graph.vertices[0].pinned = true;
}

function draw() {
    background(51);
    graph.show();

    if (organize) {
        graph.update();
        graph.organize();
    }
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
    switch (key) {
        case "p":
            graph.pin();
            break;

        case "a":
            addVertex();
            break;
    }
}

function addVertex() {
    graph.addVertex(parseFloat(automaticLabel));
    automaticLabel++;
}

function start() {
    organize = true;
}

function stop() {
    organize = false;
}
