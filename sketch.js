const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BGC1

function preload(){
  kid=loadImage("Plucking mangoes/boy.png");
  treeee=loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1300, 600);

 BGC1 = color(random(200,150),random(200,255),random(200,255));

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  rock1=new Rock(200,200,50);
  floor=new Ground(750,600,1500,25);
  yeet=new SlingShot(rock1.body,{x:210,y:410});
  mango1=new Mango(950,125,50);
  mango2=new Mango(1200,125,50);
  mango3=new Mango(1075,175,50);
  mango4=new Mango(970,175,50);
  mango5=new Mango(990,225,50);
  mango6=new Mango(1010,275,50);
  mango7=new Mango(1040,225,50);
  mango8=new Mango(1110,225,50);
  mango9=new Mango(1140,275,50);
  mango10=new Mango(1160,225,50);
  mango11=new Mango(1180,175,50);

  boy=createSprite(300,500,50,50);
  boy.addImage(kid);
  boy.scale=0.15;

  tree=createSprite(1100,300,50,50);
  tree.addImage(treeee);
  tree.scale=0.5;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(BGC1);

  drawSprites();

  rock1.display();
  yeet.display();
  floor.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  DetectCollision(rock1,mango1);
  DetectCollision(rock1,mango2);
  DetectCollision(rock1,mango3);
  DetectCollision(rock1,mango4);
  DetectCollision(rock1,mango5);
  DetectCollision(rock1,mango6);
  DetectCollision(rock1,mango7);
  DetectCollision(rock1,mango8);
  DetectCollision(rock1,mango9);
  DetectCollision(rock1,mango10);
  DetectCollision(rock1,mango11);

 
}

function mouseDragged(){
  Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  yeet.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(rock1.body,{x:210,y:410});
    yeet.attatch(rock1.body);
  }
}

function DetectCollision(A,B){
  Apos=A.body.position;
  Bpos=B.body.position;

  var distance=dist(Apos.x, Apos.y, Bpos.x, Bpos.y);
  if(distance<=A.r+B.r){
    Matter.Body.setStatic(B.body,false);
  }
}