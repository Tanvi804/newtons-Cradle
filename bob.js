class Bob {
    constructor(x,y) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1,
          'isStatic':false
      }
      this.body = Matter.Bodies.circle(x, y, 30,options)
      this.diameter=60;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("magenta");
      ellipse(0,0, this.diameter/2);
        pop();
      }
    }