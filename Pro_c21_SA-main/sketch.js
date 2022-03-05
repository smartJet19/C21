const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var Ball;
var ground;
var left;
var right;
var top_wall;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.9
  }

  ball = Bodies.circle(200,200,40,ball_options)
  World.add(world,ball)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  button1 = createImg('right.png');
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(hforce);

  button2 = createImg('up.png');
  button2.position(130,30);
  button2.size(50,50);
  button2.mouseClicked(vforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  
  background(51);
  ellipse(ball.position.x,ball.position.y,30)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1})
}
