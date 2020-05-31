class Vertex {
    static diameter = 12;

    constructor(label) {
        this.label = label;
        this.pos = this.randomPos();
        this.selected = false;

        this.speed = new p5.Vector();
        this.mass = 3;

        this.pinned = false;
    }

    randomPos() {
        let x = random(width / 4) + width / 2;
        let y = random(height / 4) + height / 2;
        return new p5.Vector(x, y);
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
        else if (this.pinned) fill(0, 0, 255);
        else fill(255);
        circle(this.pos.x, this.pos.y, Vertex.diameter);
        text(this.label, this.pos.x + Vertex.diameter, this.pos.y);
    }

    attract(v1) {
        const dist = p5.Vector.dist(v1.pos, this.pos);
        const force = p5.Vector.sub(v1.pos, this.pos);
        force.normalize();
        force.setMag(attractForce * dist);
        this.applyForce(force);
    }

    repel(v1) {
        const force = p5.Vector.sub(this.pos, v1.pos);
        force.normalize();
        const dist = p5.Vector.dist(v1.pos, this.pos);

        const mag = repelForce / this.distSq(this.pos, v1.pos);

        force.setMag(mag);

        this.applyForce(force);
    }

    distSq(pos1, pos2) {
        return (
            (pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.y - pos2.y) * (pos1.y - pos2.y)
        );
    }

    update() {
        if (!this.pinned) this.pos.add(this.speed);
    }

    applyForce(force) {
        const acceleration = p5.Vector.div(force, this.mass);
        this.speed.add(acceleration);
        this.speed.mult(0.98);
    }

    pin() {
        if (this.mouseAbove()) this.pinned = !this.pinned;
    }
}
