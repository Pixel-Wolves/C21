var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,400);
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "Green";

  gameObject1.velocityX = 5;
  gameObject1.velocityY = 3;

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "Green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "Green";
  
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "Green";

  fixedRect = createSprite(600,200,50,80);
  fixedRect.shapeColor = "Green";

  movingRect = createSprite(400,200,50,80);
  movingRect.shapeColor = "Green";
}

function draw() {
  background(255,255,255);

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "Blue";
    gameObject1.shapeColor = "Blue";
    console.log("Touching GameObject 1");
  }
  else if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "Blue";
    gameObject2.shapeColor = "Blue";
    console.log("Touching GameObject 2");
  }
  else if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "Blue";
    gameObject3.shapeColor = "Blue";
    console.log("Touching GameObject 3");
  }
  else if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "Blue";
    gameObject4.shapeColor = "Blue";
    console.log("Touching GameObject 4");
  }
  else if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "Blue";
    fixedRect.shapeColor = "Blue";
    console.log("Touching Fixed Rect");
  }
  else{
    movingRect.shapeColor = "Green";
    fixedRect.shapeColor = "Green";
    gameObject1.shapeColor = "Green";
    gameObject2.shapeColor = "Green";
    gameObject3.shapeColor = "Green";
    gameObject4.shapeColor = "Green";
  }

  bounceOff(movingRect, gameObject1);

  drawSprites();
}