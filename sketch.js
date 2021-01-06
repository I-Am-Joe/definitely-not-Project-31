const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var division=[];

var divisionHeight=200;
var ground

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(600,height,800,20);
  for (var k = 0; k <=width; k = k + 80) {
    division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinkos(j,375));
    }

    

    
}
 

function draw() {
  background("Black");  
  Engine.update(engine);
  ground.display();

for (var i = 0;i < plinkos.length;i++){
  plinkos[i].display();
}
if(frameCount%60===0){
  particles.push(new Particales(random(width/2-10,width/2+10),10,10));
}

for (var j = 0;j<particles.length;j++){
  
  particles[j].display();
}
for (var k = 0;k<division.length;k++){
  
  division[k].display();
}


} 