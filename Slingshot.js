class SlingShot{ // creating the class
    constructor(bodyA, pointB){ // giving the parameters
        var options = { // creating the options
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB; // specifying point B
        this.sling = Constraint.create(options); // creating the constraint
        World.add(world, this.sling); // adding constraint to the world
    }

    fly(){
        this.sling.bodyA= null; // makes the bird fly
    }

    display(){
        if (this.sling.bodyA){

        
        var pointA = this.sling.bodyA.position; // giving point A
        var pointB = this.pointB; // giving point B
        strokeWeight(4); // Thickness of the line
        line(pointA.x, pointA.y, pointB.x, pointB.y); // creating the line
    }
}
    
}