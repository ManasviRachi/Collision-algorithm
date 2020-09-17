var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 80, 50);
  fixedrect = createSprite(200,200,80,50);
  movingrect.shapeColor = "Green";
 fixedrect.shapeColor = "Green";
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x-fixedrect.x< fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
     movingrect.shapeColor = "Red";
     fixedrect.shapeColor = "Red";

  }
  else{
    movingrect.shapeColor = "Green";
    fixedrect.shapeColor = "Green";
  }
  drawSprites();
}