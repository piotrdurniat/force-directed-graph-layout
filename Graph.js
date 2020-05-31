class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    getVertex(label) {
        for (let v of this.vertices) {
            if (v.label == label) return v;
        }
        return undefined;
    }

    addVertex(label) {
        if (this.getVertex(label)) {
            console.log("The vertex already exists.");
        } else {
            this.vertices.push(new Vertex(label));
        }
    }

    addVertices(labels) {
        for (let label of labels) {
            this.addVertex(label);
        }
    }

    addEdge(label1, label2, directed) {
        this.addVertex(label1);
        this.addVertex(label2);

        const e = new Edge(this.getVertex(label1), this.getVertex(label2), directed);
        if (!this.hasEdge(e)) {
            console.log("edge already exists, not adding");
            this.edges.push(e);
        }
    }

    addEdges(edges, directed) {
        for (let edge of edges) {
            this.addEdge(edge[0], edge[1], directed);
        }
    }

    getAdjacencyList() {
        let table = [];
        for (let vertex of this.vertices) {
            const vertexLabel = vertex.label;
            const neighbors = this.getNeighbors(vertex);

            let row = [vertexLabel];
            for (let neighbor of neighbors) {
                row.push(neighbor.label);
            }
            table.push(row);
        }
        return table;
    }

    hasEdge(edge) {
        for (let gEdge of this.edges) {
            if (gEdge.equals(edge)) return true;
        }
        return false;
    }

    getNeighbors(vertex) {
        let neighbors = [];

        for (let edge of this.edges) {
            if (edge.vertex1.equals(vertex)) neighbors.push(edge.vertex2);
            else if (edge.vertex2.equals(vertex)) neighbors.push(edge.vertex1);
        }
        return neighbors;
    }

    getAdjacencyMatrix() {
        let matrix = [];
        for (let v1 of this.vertices) {
            let row = [];
            for (let v2 of this.vertices) {
                if (this.areNeighbors(v1, v2)) row.push(1);
                else row.push(0);
            }
            matrix.push(row);
        }
        return matrix;
    }

    areNeighbors(v1, v2) {
        let e1 = new Edge(v1, v2);
        for (let edge of this.edges) {
            if (e1.sameVertices(edge) || e1.flippedVertices(edge)) return true;
        }
        return false;
    }

    isInNeighbors(neighbors, vertex) {
        for (let n of neighbors) {
            if (n.equals(vertex)) return true;
        }
        return false;
    }

    getVertices() {
        return this.vertices;
    }

    getEdges() {
        return this.edges;
    }

    show() {
        for (let edge of this.edges) {
            edge.show();
        }
    }

    mousePressed() {
        for (let v of this.vertices) {
            v.mousePressed();
        }
    }

    mouseReleased() {
        for (let v of this.vertices) {
            v.mouseReleased();
        }
    }

    mouseDragged() {
        for (let v of this.vertices) {
            v.mouseDragged();
        }
    }
}
