let t = 0;
let font;
let points;
let word = 'Wave';

function preload() {
  font = loadFont('miga.otf');
}

function setup() {
  createCanvas(600, 300);
  noStroke();
  fill(153,255,153);

  points = font.textToPoints(word, 10, 220, 192);
}

function draw() {
  background(76,153,0);


  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    const angle = xAngle * (p.x / width) + yAngle * (p.y / height);
    const myX = p.x + 20 * cos(2 * PI * t + angle);
    const myY = p.y + 20 * sin(2 * PI * t + angle);

    ellipse(myX, myY, 6);
  }

  t = t + 0.01;
}
