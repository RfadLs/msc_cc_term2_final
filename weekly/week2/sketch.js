let snow =[];

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  snow.push(new Snowflake());
  snow.push(new Snowwind());
  for(var flake of snow){
    flake.update();
    flake.show();
  }
//steering force = desired velocity – current velocity.
}


