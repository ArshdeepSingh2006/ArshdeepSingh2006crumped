const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2, wall3;
var engine, world, ball;
var ground;

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);



	ball = new Ball(100,300,10);
	ground = new Ground(400,height,800,20);
	
	leftside = new Dustbin(550, 620, 20, 100);
	bottom = new Dustbin(610, 660,100,)
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ballObject.body, ballObject.body.position, {x: 85,y: -85});
	   
	}
}

