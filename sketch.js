var background1, backgroundImage;
var player, playerImage
var ground;
var level1, level2, endLevel, levelsImage;
var portal, portalImage;
var rightEdge, leftEdge, topEdge;
var obstacle;

function preload(){
backgroundImage = loadImage("newbackground.png");
playerImage = loadImage("green girl.png");
levelsImage = loadImage("floors.jpg");
portalImage = loadImage("portalImg.png");

}

function setup() {
  createCanvas(1400,920);

  player = createSprite(100,800,50,50);
  player.addImage(playerImage);
  player.scale = 0.3;

  ground = createSprite(700,870,1400,50)
  ground.shapeColor = "black";

  level1 = createSprite(600,600,1200,30);
  level1.shapeColor = "brown";

  level2 = createSprite(800,370,1200,30);
  level2.shapeColor = "brown";

  endLevel = createSprite(150,190,300,30);
  endLevel.shapeColor = "brown";

  portal = createSprite(150,100,50,50);
  portal.addImage(portalImage);
  portal.scale = 0.2;

  rightEdge = createSprite(1400,455,3,920);
  rightEdge.shapeColor = "red";

  leftEdge = createSprite(1,455,3,920);
  leftEdge.shapeColor = "red";

  topEdge = createSprite(700,1,1400,3);
  topEdge.shapeColor = "red";
}

function draw() { 
  background(backgroundImage);

  player.collide(ground);
  player.collide(level1);
  player.collide(level2);
  player.collide(endLevel);
  portal.collide(endLevel);

  if(keyDown("space")){
    player.velocityY = -10;

  }

  player.velocityY += 0.5;

  if(keyDown("right_arrow")){
    player.x -= -5;

  }

  if(keyDown("left_arrow")){
    player.x -= 5;

  }

  player.depth = portal.depth + 1;

  player.bounceOff(level1);
  player.bounceOff(level2);
  player.bounceOff(endLevel);
  player.bounceOff(rightEdge);
  player.bounceOff(leftEdge);
  player.bounceOff(topEdge);

  drawSprites();
}

function spawnObstacles(){
 if(World.seconds){
  obstacle = createSprite(700,50,10,10);
  obstacle.velocityY = 3;


 }
}
