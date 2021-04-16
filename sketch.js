const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,box1,box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,100,60,70);
  box2 = new Box(220,150,30,50)
  ground = new Ground(200,400)
 

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,0);  
   Engine.update(engine);
 box1.display();
 box2.display();
 ground.display();
}