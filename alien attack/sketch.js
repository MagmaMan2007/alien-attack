const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var hero,alien,people,house;
var heroimage;
var ground;
function preload(){
    ground = loadImage("images/sand.png");
    
}


function setup(){
Canvas = createCanvas(800,800);

engine = Engine.create();
world = engine.world;

hero = new Hero(200,200);





}
function draw(){
background(ground);
Engine.update(engine);
hero.display();
}