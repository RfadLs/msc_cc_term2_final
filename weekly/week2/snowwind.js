class Snowwind extends Snowflake{

    update(){
        this.wind = createVector(0.0001,0);
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);
        this.acc.sub(this.wind);
        super.update();
    }
}
