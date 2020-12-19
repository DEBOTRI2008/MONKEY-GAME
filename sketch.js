var fixedRect,movingRect;
function setup() { 
  createCanvas(800,400);
fixedRect = createSprite (200,200,20,20);
fixedRect.shapeColor = ("green");

movingRect = createSprite (350,350,20,20);
movingRect.shapeColor = ("green");



}

function draw() {
  background(255,255,255);  
  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y <  movingRect.height/2 + fixedRect.height/2    )
{
  movingRect.shapeColor = ("red");
  fixedRect.shapeColor = ("red");
}
else {
  fixedRect.shapeColor = ("green");
  movingRect.shapeColor = ("green");

}
drawSprites();



}