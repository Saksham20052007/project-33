Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight=300;
var score =0;
var particle;
var turn;
var gameState;

function setup() {
createCanvas(800, 800);
engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,height,width,20);


 for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }


  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }

  
  score = 0;
   turn = 0;
   gamestate = 0;

  
}



function draw() {
background("black");
textSize(20)
text("Score : "+score,20,30);
Engine.update(engine);


 for (var i = 0; i < plinkos.length; i++) {
   
   plinkos[i].display();
   
 }



   if(gamestate === 0 && keyCode === 32){
  particle = new Particle(mouseX, 10,10);
  particle.display();
   turn++;
   }

   if(turn===5 && gamestate===0){
     gameState = 1;
     turn = 0;
     stroke("black");
     text("GAME OVER", 300, 400)

   }
 

for (var j = 0; j < particles.length; j++) {
 
   particles[j].display();
 }
 for (var k = 0; k < divisions.length; k++) {
   
   divisions[k].display();
 }
}