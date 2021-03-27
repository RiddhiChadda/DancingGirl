const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint;

var engine , world , bg

function preload() {
   bg = loadImage ("background.jpeg")
   music = loadSound("Shape_of_You.mp3") 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  girl = new Dancer(400, 240, 100 , 300  )
  ground1 = new Ground (400,395 ,800 , 5 )
  ground2= new Ground (400,270, 20, 5 )
  
}

function draw() {
  background(bg);
  Engine.update(engine)  

  music.play()

  fill("white")
  textSize(20)
  text("Press the r key" , 650,50 ) 
  girl.display() ; 
  ground1.display() ; 
  ground2.display() ; 

  if (keyDown("r")) {
    girl.Step1()
  }
}