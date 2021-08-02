var fixed;
var moving;
var box1;
var box2;


function setup() {
  createCanvas(800,400);
  

  moving = createSprite(400,200,50,80);
  fixed = createSprite(200,200,80,50);

  box1 = createSprite(600,100,50,80);
  box2 = createSprite(600,300,80,50);

  moving.shapeColor = "green";
  fixed.shapeColor  = "green";

  moving.velocityX = -4;
  fixed.velocityX = 4;
  box1.velocityY = 4;
  box2.velocityY = -4;
}

function draw() {
  background("black");  



if (moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < moving.width/2 + fixed.width/2 && moving.y - fixed.y < moving.height + fixed.height/2 && fixed.y - moving.y < fixed.height + moving.height/2){
  moving.shapeColor = "red";
  fixed.shapeColor = "red";

  moving.velocityX = moving.velocityX*(-1);
  fixed.velocityX = fixed.velocityX*(-1);
  box1.velocityY = moving.velocityX*(-1);
  box2.velocityY = fixed.velocityX*(-1);

}

else{
  moving.shapeColor = "green";
  fixed.shapeColor = "green";

}

  drawSprites();

  
}