
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var stone1;
var hammer1;
var rubber1;
var iron1;
var s1,s2,s3,s4,s5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400,590,800,40);
  stone1=new Stone(350,200,80,80);
  iron1=new Iron(200,300,70,40);
  s1=new Sand(700,100);
  s2=new Sand(690,100);
  s3=new Sand(680,100);
  s4=new Sand(670,200);
  s5=new Sand(660,200);
  rubber1=new Rubber(450,150,40,40);
  hammer1=new Hammer(400,400,30,95);


  
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground1.display();
  stone1.display(); 
  iron1.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  rubber1.display();
  hammer1.display();
  drawSprites();
 
}



