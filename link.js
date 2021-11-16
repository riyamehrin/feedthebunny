class Link{
    constructor(bodyA,bodyB)    {
        var ll=bodyA.body.bodies.length-2;
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[ll],
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01
        });
        World.add(engine.world,this.link)
    }
}