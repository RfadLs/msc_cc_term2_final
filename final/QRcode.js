function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255,51,153);
  noStroke();
  fill(0);
  
  rectMode(CENTER);

  for (let x = 80; x <= width - 60; x += 80) {
    for (let y = 80; y <= height - 80; y += 60) {
      let rect1 = floor(random(1, 10));
      for (let i = 0; i < rect1; i++) {
        let posX = random(x - 20, x + 20);
        let posY = random(y - 20, y + 20);
        drawRects(posX, posY, x, y);
      }
      
      let rect2 = floor(random(6, 36));
      let rects = [];
      for (let i = 0; i < rect2; i++) {
        let posX = floor(random(1, 10)) * 6 - 40;
        let posY = floor(random(1, 10)) * 6 - 40;
        avoidDupRects(rects, posX, posY);
      }
      
      for (let i = 0; i < rects.length; i++) {
        let posX = rects[i][0];
        let posY = rects[i][1];
        drawRects(x + posX, y + posY, x, y);
      }
    }
  }
}


function drawRects(posX, posY, centerX, centerY) {
  rect(posX, posY, 6); 
  rect(4 * centerX - posX, posY, 6);
  rect(posX, 2 * centerY - posY, 4);
  rect(4 * centerX - posX, 2 * centerY - posY, 4);
}


function avoidDupRects(rects, posX, posY) {
  while (rects.includes([posX, posY]) || rects.includes([-posX, posY]) || rects.includes([posX, -posY]) || rects.includes([-posX, -posY])) {
    posX = floor(random(1, 10)) * 5 - 10;
    posY = floor(random(1, 10)) * 5 - 10;
  }
  rects.push([posX, posY]);
}

function mousePressed() {
  redraw();
}
