var fixedRect, movingRect;
var sprite1,sprite2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1=createSprite(100,100,50,100);
sprite1.shapeColor="red";
sprite2=createSprite(300,100,50,100);
sprite2.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if(isTouching(movingRect,sprite2)){
   movingRect.shapeColor = "blue";
  sprite2.shapeColor = "blue";
   } 
   else{
       movingRect.shapeColor = "green";
       sprite2.shapeColor = "red";
   }
  drawSprites();
}
