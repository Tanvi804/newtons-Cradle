
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 654);

	engine = Engine.create();
	world = engine.world;

var bobDiameter=60;

	//Create the Bodies Here.
 roof = new Roof(400,130);
 bobObject1 = new Bob(400,400)
 bobObject2 = new Bob(340,400)
 bobObject3 = new Bob(280,400)
 bobObject4 = new Bob(460,400)
 bobObject5 = new Bob(520,400)

 rope1 = new Rope(bobObject1.body,roof.body,0,0)
 rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter,0)
 rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0)
 rope4 = new Rope(bobObject4.body,roof.body,bobDiameter,0)
 rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject3.body, bobObject3.body.position, {x: -200  , y:200 })
  }
}

