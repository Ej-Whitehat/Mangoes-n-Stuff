class Mango{
    constructor(x, y, r) {
        var options = {
          isStatic:true,
          restitution:0,
          friction:1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
      }
  }