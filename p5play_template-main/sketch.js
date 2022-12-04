var box,box1,box2;

function setup(){
createCanvas(1000,1000);

box1 = createSprite(200,100,20,30);
box = createSprite(500,100,20,30);
box2 = createSprite(700,500,50,30);


}
function draw(){
background("blue");
if(keyIsDown(RIGHT_ARROW)){
  box.position.x  =  box.position.x +5
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x  =  box.position.x -5
}
if(keyIsDown(UP_ARROW)){
  box.position.y  =  box.position.y -5
}
drawSprites();
}