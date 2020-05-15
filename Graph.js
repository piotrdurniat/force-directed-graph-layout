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

    getAdjacencyList() {
        let table = [];
        for (let vertex of this.vertices) {
            const vertexLabel = vertex[0];
            let row = [vertexLabel];
            const neighbors = vertex[1];
            for (let neighbor of neighbors) {
                row.push(neighbor[0]);
            }
            table.push(row);
        }
        return table;
    }

    getAdjacencyMatrix() {
        let matrix = [];
        for (let v1 of this.vertices) {
            let rows = [];
            const neighbors = v1[1];
            for (let v2 of this.vertices) {
                const neighborLabel = v2[0];
                if (neighbors.indexOf(neighborLabel) >= 0) rows.push(1);
                else rows.push(0);
            }
            matrix.push(rows);
        }
        return matrix;
    }

    getVertices() {
        let vertices = [];
        for (let vertex of this.vertices) {
            const vertexLabel = vertex[0];
            vertices.push(vertexLabel);
        }
        return vertices;
    }

    getEdges() {
        let edges = [];
        for (let vertex of this.vertices) {
            const vertexLabel = vertex[0];
            const neighbors = vertex[1];
            for (let neighbor of neighbors) {
                edges.push([vertexLabel, neighbor]);
            }
        }
        return edges;
    }
}
