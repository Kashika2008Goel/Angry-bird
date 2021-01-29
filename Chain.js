class Chain{
    constructor(B1,B2){
      var options= {
        stiffness: 0.04,
        length: 10,
        bodyA: B1,
        bodyB: B2
      }

      this.body= Constraint.create(options);
      World.add(world,this.body);
    }

    display(){
        stroke("black");
        strokeWeight(4);
        line(bird.body.position.x,bird.body.position.y,log6.body.position.x,log6.body.position.y, )

    }
}