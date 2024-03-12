class Snowflake{
    constructor(){
        let x = random(width);
        let y = random(-100,-10);
        this.size = random(4,8);
        this.pos = createVector(x,y);
        this.velocity = createVector(0,0.1);
        this.acc = createVector(0,0.03);
    }

    update(){

        this.velocity.add(this.acc);
        this.pos.add(this.velocity);

    }

show () {
    stroke(255);
    strokeWeight(this.size);
    point(this.pos.x,this.pos.y);
}
}
