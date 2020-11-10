const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    pig1 =new pig(800,330);
    box2 = new Box(900,320,70,70);
    log1= new log(800,310,300,PI/2);

    box3 = new Box(700,320-90,70,70);
    pig2 =new pig(800,330-70);
    box4 = new Box(900,320-90,70,70);
    log2= new log(800,310-110,300,PI/2);
    ground = new Ground(600,height,1200,20);


    box5 = new Box(800,320-90-90,70,70);
    log3= new log(720,120,180,PI/7);
    log4= new log(880,120,180,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();



}

