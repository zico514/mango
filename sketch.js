
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png")
	treeImg=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	

	boyp= createSprite(200,340,1,1);
boyp.addImage(boyImg);
boyp.scale=0.1;

treeForMe=createSprite(800,200,1,1);
treeForMe.addImage(treeImg);
treeForMe.scale=0.35;
	
ground = new Ground(600,height,1200,20);
	so = new Stone(100,100);
	slingShot=new Slingshot(so.body,{x:168,y:290})
	m1=new Mango(800,200);
	m2=new Mango(750,190)
	m3=new Mango(900,100)
	m4=new Mango(850,170)
	m5=new Mango(840,100)
	m6=new Mango(810,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);


  drawSprites();

so.depth=boyp.depth+1;

ground.display();
  so.display();
  slingShot.display();
 m1.display();
 m2.display();
 m3.display();
 m4.display();
m5.display();
m6.display();
keyPressed();
detectCollision(so,m1);
detectCollision(so,m2);
detectCollision(so,m3);
detectCollision(so,m4);
detectCollision(so,m5);
detectCollision(so,m6);
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(so.body,{x:100,y:100});
		slingShot.attach(so.body);
	}
}
function mouseDragged(){
    Matter.Body.setPosition(so.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if( distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}