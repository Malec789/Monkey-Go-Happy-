
var monkey , monkey_running;
var bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var ground, groundImage;
var survivalTime = 0;
var rand;

function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}



function setup() {
  createCanvas(400, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10); 
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time: " + survivalTime, 100, 50);
  
  
  
  ground.shapeColor = ("black")
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  
  if (keyDown("space") && monkey.y === 314.3){
    monkey.velocityY = -18;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if (frameCount % 80 === 0){
    bananas();
  }
  
  if (frameCount % 100 === 0){
    obstacles();
  }
    
  drawSprites();
}

function bananas(){
  var banana = createSprite(400, Math.round(random(90, 300)), 50, 50);
  banana.addImage(bananaImage);
  banana.velocityX = -4;
  banana.scale = 0.1;
  banana.lifetime = 100;
  
  bananaGroup.add(banana);  
}

function obstacles(){
  var obstacle = createSprite(400, 330, 40, 40);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacle.liftetime = 100;  
  
  obstacleGroup.add(obstacle);  
}





