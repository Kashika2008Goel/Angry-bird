class Slingshot{
    constructor(B1,Point){
      var options= {
        stiffness: 0.04,
        length: 10,
        bodyA: B1,
        pointB: Point
      }

      this.body= Constraint.create(options);
      this.pointB= Point;
      World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){   
        if(this.body.bodyA){
            stroke("black");
            strokeWeight(4);
            line(bird.body.position.x,bird.body.position.y,this.pointB.x,this.pointB.y);
        }
    }
}