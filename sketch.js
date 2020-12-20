const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var circle_options ={
        restitution:1
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,100,50,circle_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(255);
    Engine.update(engine);

    push()
    rectMode(CENTER);
    fill("red")
    rect(ground.position.x,ground.position.y,400,20);
    pop();

    push();
    ellipseMode(CENTER)
    fill("green")
    ellipse(ball.position.x,ball.position.y,25,25)
    pop();
}