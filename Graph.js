class Graph {
    constructor() {
        this.vertices = new Map();
    }

    hasVertex(vertex) {
        return this.vertices.has(vertex);
    }

    getVertex(vertex) {
        return this.vertices.get(vertex);
    }

    addVertex(vertex) {
        if (this.hasVertex(vertex)) return;
        this.vertices.set(vertex, []);
    }

    addVertices(vertices) {
        for (let v of vertices) {
            this.addVertex(v);
        }
    }

    addEdge(edge, directed = false) {
        let vertex = edge[0];
        let nextVertex = edge[1];

        this.addVertex(vertex);
        this.addVertex(nextVertex);

        this.getVertex(vertex).push(nextVertex);

        if (!directed) this.getVertex(nextVertex).push(vertex);
    }

    addEdges(edges, directed = false) {
        for (let edge of edges) {
            this.addEdge(edge, directed);
        }
    }

    consoleTableVertices() {
        let table = [];
        for (let vertex of this.vertices) {
            table.push(vertex);
        }
        console.log("Graph vertices:");
        console.table(table);
    }

    printAdjecencyTable() {
        let table = [];
        for (let vertex of this.vertices) {
            let row = [vertex[0]];
            let neighbors = vertex[1];
            for (let neighbor of neighbors) {
                row.push(neighbor[0]);
            }
            table.push(row);
        }
        console.log("Adjecency Table:");
        console.table(table);
    }
}
