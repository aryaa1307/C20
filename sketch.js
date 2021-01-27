var fr,mr
function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(400,200,80,30);
  fr.shapeColor="blue"
  mr.shapeColor="blue"
}

function draw() 
{
  background("pink");  
  mr.y=mouseY
  mr.x=mouseX
  console.log(mr.x-fr.x);
  if(mr.x-fr.x<=(mr.width/2+fr.width/2)&&fr.x-mr.x<=(mr.width/2+fr.width/2)&&mr.y-fr.y<=(mr.height/2+fr.height/2)&&fr.y-mr.y<=(mr.height/2+fr.height/2))
  {
    fr.shapeColor="black"
    mr.shapeColor="black"
  }
  else 
  {
    fr.shapeColor="blue"
    mr.shapeColor="blue" 
  }


  drawSprites();
}