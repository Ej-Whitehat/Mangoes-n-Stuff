class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 1,
            length: 400
        }
        this.chain=Constraint.create(options); 
        World.add(world,this.chain)
    }

    display(){
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        strokeWeight(4);
        line(point1.x, point1.y, point2.x, point2.y);
    }
    
}