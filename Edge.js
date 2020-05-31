class Edge {
    static diameter = 2;

    constructor(vertex1, vertex2, directed = false) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.directed = directed;
    }

    equals(edge) {
        if (edge.directed != this.directed) return false;

        if (this.directed) {
            return this.sameVertices(edge);
        } else {
            return this.sameVertices(edge) || this.flippedVertices(edge);
        }
    }

    sameVertices(edge) {
        return this.vertex1.equals(edge.vertex1) && this.vertex2.equals(edge.vertex2);
    }

    flippedVertices(edge) {
        return this.vertex1.equals(edge.vertex2) && this.vertex2.equals(edge.vertex1);
    }

    show() {
        stroke(255);
        strokeWeight(Edge.diameter);
        line(
            this.vertex1.pos.x,
            this.vertex1.pos.y,
            this.vertex2.pos.x,
            this.vertex2.pos.y
        );
    }

    attractVertices() {
        this.vertex1.attract(this.vertex2);
        this.vertex2.attract(this.vertex1);
    }
}
