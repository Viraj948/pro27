class Bob {
    constructor(x, y, r) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,r,options);
     this.x=x;
     this.y=y 
     this.r=r 
  
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var bobDiameter=(this.r)*2
      push();

      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill ("orange")

      ellipse( 0,0,this.r,this.r);
      pop()
    }
  };