var block1
var block2 
var block3
var block4


function setup() {
  createCanvas(800,400);

  block1 = createSprite(400, 200, 50, 50);
  block1.shapeColor = "green"
  block1.debug = true
  block2 = createSprite(200, 200, 50, 50);
  block2.shapeColor = "blue"
  block2.debug = true
  block3 = createSprite(50,300,50,50)
  block4 = createSprite(350,300,50,50)
  block3.velocityX = 5
  block4.velocityX = -5
}

function draw() {
  background("black");  

block1.x = mouseX
block1.y = mouseY
if(block4.x-block3.x <block4.width/2+block3.width/2){
  block3.velocityX = -1*block3.velocityX
  block4.velocityX = -1*block4.velocityX
}

if(block1.x-block2.x <block1.width/2+block2.width/2 && block2.x-block1.x <block2.width/2+block1.width/2
  && block2.y-block1.y <block2.height/2+block1.height/2 && block1.y-block2.y <block1.height/2+block2.height/2){
  block1.shapeColor = "white"
  block2.shapeColor = "red"
}
else{
  block1.shapeColor = "green"
  block2.shapeColor = "blue"
}
  drawSprites();
}