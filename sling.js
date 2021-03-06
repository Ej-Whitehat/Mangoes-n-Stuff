class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.color=color(random(0,0),random(100,255),random(100,255));
    }
    attatch(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }   
}