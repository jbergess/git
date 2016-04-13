/*
 * fisik.js
 * Archivo para pruebas con matter.js
 * Creación inicial del motor 2D y objetos
 */

// Alias de los módulos
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    MouseConstraint = Matter.MouseConstraint,
    Constraint = Matter.Constraint;

// creación del motor
var engine = Engine.create(document.getElementById("engine"));

// caja izquierda
var box = Bodies.rectangle(100, 200, 50, 50);
//Body.setMass(box,5);

// caja libre
var box2 = Bodies.rectangle(400, 400, 50, 50);
Body.setMass(box,5);

// esfera izquierda
var ball = Bodies.circle(700, 200, 25, 50);
//Body.setMass(ball,20);

// esfera libre
var ball2 = Bodies.circle(700, 200, 25, 50);
Body.setMass(ball,20);

// techo y piso estáticos
var ceiling = Bodies.rectangle(400, 10, 800, 10, { isStatic: true });
var ground = Bodies.rectangle(400, 500, 800, 10, { isStatic: true });
var left_wall = Bodies.rectangle(0, 10, 10, 990, { isStatic: true });
var right_wall = Bodies.rectangle(800, 10, 10, 990, { isStatic: true });

// agrega resortes
var valuestiffrightLeft=document.getElementById("stiffnessLeft").innerHTML;
var valuestiffLeft=document.getElementById("stiffnessRight").innerHTML;
var spring1 = Constraint.create({
	pointA : {x:100, y:0},
	bodyB : box,
});

spring1.lenght = 500;


var spring2 = Constraint.create({
	pointA : {x:700, y:0},
	bodyB : ball,
});
spring2.lenght = 600;

// habilita interacción con mouse o touchscreen
mouseConstraint = MouseConstraint.create(engine);


// agrega objetos al mundo
World.add(engine.world, [box, box2, ball, ball2, ceiling, ground,left_wall,right_wall, mouseConstraint, spring1, spring2]);

// Inicia el motor
Engine.run(engine);