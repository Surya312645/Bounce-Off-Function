var movingRect, fixedRect;
var sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
 movingRect = createSprite(400, 800,80,30);
 movingRect.shapeColor = "yellow";
 sprite1 = createSprite(300, 300, 50, 80);
 sprite1.shapeColor = "red"
 sprite2 = createSprite(700, 300,80,30);
 sprite2.shapeColor = "blue"
 movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  sprite1.velocityX = +7
  sprite2.velocityX = -7
  sprite1.debug = true
  sprite2.debug = true
  movingRect.debug = true
  fixedRect.debug = true
}

function draw() {
  background(0,0,0);  
  
  bounce_off(movingRect, fixedRect)
  bounce_off(sprite1, sprite2)

  bounce_off(fixedRect, sprite2)
  bounce_off(sprite1, movingRect)
 
  drawSprites();
}
