class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color(random(0,0),random(100,255),random(0,0));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(0);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  