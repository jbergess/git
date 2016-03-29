// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    MouseConstraint = Matter.MouseConstraint,
    Constraint = Matter.Constraint;

// create a Matter.js engine
var engine = Engine.create(document.getElementById("engine"));

// set world gravity and timescale
//engine.world.gravity.y = 1;
//engine.timing.timeScale = 1;

// create a box object
var box = Bodies.rectangle(100, 200, 50, 50);
Body.setMass(box,5);

// create a box object
var box2 = Bodies.rectangle(400, 400, 50, 50);
Body.setMass(box,5);

// create a ball object
var ball = Bodies.circle(700, 200, 25, 50);
Body.setMass(ball,20);

// create a ball object
var ball2 = Bodies.circle(700, 200, 25, 50);
Body.setMass(ball,20);

// create floor and ceiling
var ceiling = Bodies.rectangle(400, 10, 800, 10, { isStatic: true });
var ground = Bodies.rectangle(400, 500, 800, 10, { isStatic: true });
var left_wall = Bodies.rectangle(0, 10, 10, 990, { isStatic: true });
var right_wall = Bodies.rectangle(800, 10, 10, 990, { isStatic: true });
//add spring constraints
var valuestiff=document.getElementById("stiffness").innerHTML;
 //println(valuestiff)
var spring1 = Constraint.create({
	pointA : {x:100, y:0},
	bodyB : box, 
	//stiffness: valuestiff
	//stiffness: 0.1

});
spring1.lenght = 500;


var spring2 = Constraint.create({
	pointA : {x:700, y:0},
	bodyB : ball,
	stiffness: 0.1
});
spring2.lenght = 600;

// Vector test
//var vector1 = {x:5, y:5};
//var vector2 = {x:4, y:8};


// add a mouse controlled constraint for mouse input events
mouseConstraint = MouseConstraint.create(engine);


// add all of the bodies to the world
World.add(engine.world, [box, box2, ball, ball2, ceiling, ground,left_wall,right_wall, mouseConstraint, spring1, spring2]);

// run the engine
Engine.run(engine);