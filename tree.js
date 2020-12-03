class Tree{
    constructor(x,y,width,height){
       var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
       } 
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.image=loadImage("Plucking mangoes/tree.png");
       this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
       World.add(world, this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}