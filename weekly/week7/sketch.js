let myFont;
let points;
let word = "Hey";



function preload() {
  myFont = loadFont("Miga.otf");
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220,40,100);

  var sf = constrain(map(mouseY, 0, height, 0.2, 0.01), 0.1, 0.5);
  points = myFont.textToPoints(word,60, 390, 260);
  print(points);

  for (var i = 0; i < points.length; i++) {
    let pt = points[i];
    let nx = (noise(i * 5 + frameCount * 0.05) - 0.5) * 10;
    let ny = (noise(i * 20 + frameCount * 0.05) - 0.5) * 50;
    points[i].x += nx;
    points[i].y += ny;
  }

  noStroke();
  fill(80,80,100);
  beginShape();
  for (var i = 0; i < points.length; i++) {
    let pt = points[i];
    rect(pt.x, pt.y,20);
  }
  endShape();

  stroke(0);
  strokeWeight(0);
  noFill();

}
