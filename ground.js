class Ground{
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
        fill("black");
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    }
    display(){
        var PaperPos=this.body.position;
        push();
        translate(PaperPos.x,PaperPos.y);
        rectMode(CENTER);
        strokeWeight(10);
        pop();
    }
}