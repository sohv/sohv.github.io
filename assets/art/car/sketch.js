let panels = [];
let numPanels = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();

  for (let i = 0; i < numPanels; i++) {
    panels.push(new CarPanel(random(width), random(height), i / numPanels));
  }
}

function draw() {
  background(0, 0, 5, 12); // soft fading background

  for (let p of panels) {
    p.update(mouseX, mouseY);
    p.display();
  }
}

class CarPanel {
  constructor(x, y, depth) {
    this.pos = createVector(x, y);
    this.points = [];
    this.numPoints = int(random(6, 14));
    this.hue = random(180, 300);
    this.baseHue = this.hue;
    this.angleOffset = random(TWO_PI);
    this.speed = random(0.002, 0.008) * (1 - depth);
    this.depth = depth;
    
    for (let i = 0; i < this.numPoints; i++) {
      this.points.push(createVector(this.pos.x, this.pos.y));
    }
  }

  update(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    let pull = constrain(map(d, 0, 300, 0.15, 0), 0, 0.15);

    this.pos.x += (mx - this.pos.x) * pull;
    this.pos.y += (my - this.pos.y) * pull;

    this.hue = (this.baseHue + millis() * 0.02) % 360;

    for (let i = 0; i < this.points.length; i++) {
      let t = millis() * this.speed + i;
      let swayX = sin(t + this.angleOffset) * 180 * (i / this.numPoints);
      let swayY = cos(t + this.angleOffset) * 80 * (i / this.numPoints);
      this.points[i].x = this.pos.x + swayX;
      this.points[i].y = this.pos.y + swayY;
    }
  }

  display() {
    for (let i = 0; i < this.points.length - 1; i++) {
      let p1 = this.points[i];
      let p2 = this.points[i + 1];
      let alpha = map(i, 0, this.points.length - 1, 10, 80) * (1 - this.depth);
      let w = 1.2 + i * 0.25 * (1 - this.depth);
      
      // occasional sparkle
      if (random() < 0.002) alpha = 100;

      stroke(this.hue, 80, 100, alpha);
      strokeWeight(w);
      bezier(p1.x, p1.y, p1.x + 20, p1.y - 20, p2.x - 20, p2.y + 20, p2.x, p2.y);
    }
  }
}

function mousePressed() {
  panels = [];
  for (let i = 0; i < numPanels; i++) {
    panels.push(new CarPanel(random(width), random(height), i / numPanels));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
