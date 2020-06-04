class Place{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.place = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.place);
    }

    fly (){
        this.place.bodyA=null;
    }

    display(){
        if(this.place.bodyA){
        var pointA = this.place.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}