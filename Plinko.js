class Plinkos{
  constructor(x,y){
    var options = {
      restitution: 2,
      friction: 0,
       isStatic: true
    }
    this.radius=10;
    this.body = Bodies.circle(x,y,10,options);
    this.radius = this.body.circleRadius;
    World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      stroke("black");
      fill("pink")
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
  }
};
