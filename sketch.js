
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
  roofObject=new roof(400,100,300,10);



  
   bobObject1=new bob(300,500,"red");
   bobObject2=new bob(350,500,"black");
   bobObject3=new bob(400,500,"blue");
   bobObject4=new bob(450,500,"orange");
   bobObject5=new bob(500,500,"green");

   rope1=new rope(bobObject1.body,roofObject.body,-100)
   rope2=new rope(bobObject2.body,roofObject.body,-50)
   rope3=new rope(bobObject3.body,roofObject.body,0)
   rope4=new rope(bobObject4.body,roofObject.body,50)
   rope5=new rope(bobObject5.body,roofObject.body,100)	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofObject.display();

 rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed(){

 if(keyCode===UP_ARROW){

  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:50});
 }


}

