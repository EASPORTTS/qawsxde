var movingrectangle,fixedrectangle

function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(300,300,30,30)
  fixedrectangle=createSprite(300,300,30,30)
  movingrectangle.shapeColor="red"
  fixedrectangle.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
  fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
  movingrectangle.y-fixedrectangle.y<movingrectangle.heigh/2+fixedrectangle.height/2&&
  fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
  movingrectangle.shapeColor="purple"
  fixedrectangle.shapeColor="purple"
}else{
  movingrectangle.shapeColor="red"
  fixedrectangle.shapeColor="red"
}








  drawSprites();
}