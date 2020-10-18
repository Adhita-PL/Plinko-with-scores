const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(25);
  text("Score : "+score,20,40);
  textSize(25);
  fill("white");
  text("500",20,520);
  text("500",100,520);
  text("500",180,520);
  text("500",260,520);
  text("100",340,520);
  text("100",420,520);
  text("100",500,520);
  text("200",580,520);
  text("200",660,520);
  text("200",740,520);

  Engine.update(engine);
  ground.display();
  
  if ( count>= 5) {
    gameState ="end";
    textSize(40);
    fill("red");
    stroke("black");
    strokeWeight(4);
    text("GameOver", 300, 250);
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
  
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
     

    if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
     score=score+500;
     particles.pop();
    }
   else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
     score = score + 100;
     particles.pop();
   }
   else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
     score = score + 200;
     particles.pop();
   }
  }
 
}

function mousePressed(){
  if(gameState!=="end"){
     count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}





































