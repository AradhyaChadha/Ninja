var sword,swordI;
var PLAY=1;
var END=0;
var gameState=1;
var fruits ,EnemyI;
var score = 0;
function preload(){
  swordI= loadImage("sword.png");
  fruit1= loadImage("fruit1.png");
  fruit2= loadImage("fruit2.png");
  fruit3= loadImage("fruit3.png");
  fruit4= loadImage("fruit4.png");
  EnemyI = loadImage("alien1.png");
 gameOverImage= loadImage("gameover.png");
}
function setup(){
    createCanvas(400,400);
   background1 = createSprite(0,0,600,600);
    background1.scale = 2.5
  background1.shapeColor= "lightblue";
  
  sword=createSprite(40,200,20,20);
  sword.addImage("swordI",swordI);
  sword.scale=0.7
  
  
  fruitGroup  =new Group();
 EnemyG =new Group();
}
function draw(){
//background("white");
  
if (gameState == PLAY){
  sword.y=World.mouseY;
  sword.x=World.mouseX;
}
    if (sword.isTouching(EnemyG)){
    sword.changeAnimation ("game over", gameOverImage);
    sword.x=200;
    sword.y=200;
    }
  
 if (fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach();
   score=score+1
 }
   fruits();
 Enemy();
  
  drawSprites();
   text("score: "+ score, 50,50);
  
}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
   if (r==1) {
     fruit.addImage("f1",fruit1);
     
   }else if(r==2) {
     fruit.addImage("f2",fruit2);
     
   }
    else if(r==3) {
     fruit.addImage("f3",fruit3);
     
   }else if(r==4) {
     fruit.addImage("f4",fruit4);
     
   }
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
    
  }
}
function Enemy(){
  if(World.frameCount%120===0){
     var Enemy=createSprite(400,200,20,20);
  Enemy.scale=0.5;
    Enemy.addImage("alien",EnemyI)
    Enemy.velocityX=-5;
    Enemy.setLifetime=50;
    EnemyG.add(Enemy);
  }
}