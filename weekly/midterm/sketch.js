let shapeType;
let hueSlider;
let gravity = 1.0;
let mass = 5.0;
let r=10;
let R=100;
let n=20;
let hue;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  shapeType = new ShapeType(width / 2, height / 2, mass, gravity);
  colorMode(HSB);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  fill(255, 150);
  rect(0, 0, width, height);
}
function draw() {
  fill(255, 150);
  rect(0, 0, width, height);
  hue = map(mouseX,0,width,560,300);
  if(hue>360){
    hue -= 360;
  }
  // 更新并显示图形
  shapeType.update(mouseX, mouseY);
  shapeType.display(mouseX, mouseY, hue);
}
function map(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
class ShapeType {
  constructor(xpos, ypos, m, g) {
    this.x = xpos; // x 和 y 坐标
    this.y = ypos;
    this.vx = 0; // x轴和y轴速度
    this.vy = 0;
    this.mass = m;
    this.gravity = g;
    this.radius = 0.02 * width;
    this.stiffness = 0.2;
    this.damping = 0.7;
  }
  update(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }
  display(nx, ny, hue) {
    push();
    translate(this.x - 10 * this.radius, this.y - 10 * this.radius);
    console.log(this.radius)
    scale(this.radius/7);
    randomSeed(99);
    for(let i=0; i<10; i++){
        fill(hue,100,random(50,100));
        noStroke();
        this.star(random(0,300),random(0,300));
    }
    pop();
  }
  star(posx,posy){
    let pos = createVector(posx,posy);
    let radial = createVector(1,0);
    r = map(mouseX,0,width,10,200);
    R = map(mouseY,0,height,100,200)
    console.log(r)
    if(r>R){
      r=R;
    }
    beginShape();
    for(let i=0; i<n+1; i++){
      radial.normalize();
      if(i%2===0){
        radial.mult(R)
      }else{
        radial.mult(r)
      }
      radial.rotate(2*PI/n);
      let v = p5.Vector.add(pos,radial);
      vertex(v.x,v.y);
    }
    endShape();
    noFill();
    stroke(0)
    let h = map(mouseX,width/2,0,1,50)
    let w = map(mouseX,0,width,10,100);
    if(mouseX <= width/2){
      arc(pos.x,pos.y+10,w,h,PI,0)
    }else{
      arc(pos.x,pos.y+10,w,h,0,PI)
    }
    ellipse(pos.x-10,pos.y-10,5);
    ellipse(pos.x+10,pos.y-10,5);
  }
}