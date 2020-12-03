class Rock{
    constructor(x,y,r,angle){
       var options={
            isStatic:false,
            restitution:0.8,
            friction:1.5,
            density:1.2
       } 
       this.x=x;
       this.y=y;
       this.r=r;
       this.angle=angle;
       this.image=loadImage("Plucking mangoes/stone.png");
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world, this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+40, this.r+40);
        pop();
    }
}