const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var maxDrops=100
var drops=[]

function preload(){
    
}

function setup(){
 engine=Engine.create();
 world=engine.world;
 
 createCanvas(500,600)  

 for(var i=0; i<maxDrops;i++){
     drops.push(new Drop(random(0,400),random(0,400)));
 }
}

function draw(){
   Engine.update(engine);
   background(0);
   
   for(var i=0; i<maxDrops;i++){
  drops[i].display();
  drops[i].update();
}
}   

