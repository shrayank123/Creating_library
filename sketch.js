var movingrect;
var fixedrect;
var gameobject1,gameobject2,gameobject3


function setup() 
{
  createCanvas(900,400);
   movingrect =  createSprite(400, 200, 50, 50);
   movingrect.shapeColor="blue"

   fixedrect= createSprite(500, 200, 50, 50);
   fixedrect.shapeColor="red"

   gameobject1 =  createSprite(600, 100, 50, 50);
   gameobject1.shapeColor="black"
   gameobject1.velocityY=3

   gameobject2 =  createSprite(600, 400, 50, 50);
   gameobject2.shapeColor="green"
   gameobject2.velocityY=-8
  

   gameobject3 =  createSprite(800, 200, 50, 50);
   gameobject3.shapeColor="purple"
}

function draw() 
{
  background(255,255,255);  
 /* movingrect.x=World.mouseX
  movingrect.y=World.mouseY */

  movingrect.x = World.mouseX 
  movingrect.y = World.mouseY

  

if(isTouching(movingrect,gameobject3))
{ 
  movingrect.shapeColor="yellow";
 gameobject3.shapeColor="yellow";
}
 else
 {
  movingrect.shapeColor="green"
  gameobject3.shapeColor="red"

  
 }

 bounceOff(gameobject1,gameobject2)

  drawSprites();
}


