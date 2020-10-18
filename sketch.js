const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var stone
var ground,boy;
var slingshot;
var mango1,mango2,mango3,mango4,mango5;
var tree;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    stone = new Stone(219,380,20,20);
    
    ground = new Ground(200,height,2000,20);
    boy = new Boy(260,450,120,300);
    
    tree = new Tree(800,100,250,450);
    mango1 = new Mango(1030,300,20,20);
    mango2 = new Mango(900,170,20,20);
    mango3 = new Mango(840,230,20,20);
    mango4 = new Mango(930,250,20,20);
    mango5 = new Mango(870,300,20,20);
    slingshot = new SlingShot(stone.body,{x: 219,y :380});

}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    boy.display();
    
    tree.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    stone.display();
}

function detectcollision(Lstone,Lmango){
    mangoBodyPosition = Lmango.body.position;
    stoneBodyPosition = Lstone.body.position;
 
    var distance = dist(stoneBodyPosition.x,stoneBodyPostion.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r + Lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
 }
 
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}