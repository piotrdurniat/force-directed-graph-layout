class Vertex {
    static diameter = 20;

    constructor(label) {
        this.label = label;
        this.pos = createVector(random(width), random(height));
        this.selected = false;
    }

    equals(vertex) {
        return this.label == vertex.label;
    }

    mouseAbove() {
        return dist(mouseX, mouseY, this.pos.x, this.pos.y) < Vertex.diameter;
    }

    mousePressed() {
        if (this.mouseAbove()) this.selected = true;
    }

    mouseReleased() {
        this.selected = false;
    }

    mouseDragged() {
        if (this.selected) this.pos.set(mouseX, mouseY);
    }
    show() {
        noStroke();
        if (this.selected) fill(0, 255, 0);
        else fill(255);
        circle(this.pos.x, this.pos.y, Vertex.diameter);
    }
}
