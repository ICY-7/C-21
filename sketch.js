var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  dummy1 = createSprite(100, 100, 50, 80);
  dummy1.shapeColor = "green";
  dummy2 = createSprite(200, 100, 50, 80);
  dummy2.shapeColor = "green";
  dummy3 = createSprite(300, 100, 50, 80);
  dummy3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, dummy3)) {
    movingRect.shapeColor = "red";
    dummy3.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
    dummy3.shapeColor = "green";
  }

  drawSprites();
}