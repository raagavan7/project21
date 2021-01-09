var canvas,edges;
var music;
var ball,block1,block2,block3,block4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(100,580,195,15);
block1.shapeColor="green";

block2=createSprite(300,580,195,15);
block2.shapeColor="red";

block3=createSprite(500,580,195,15);
block3.shapeColor="blue";

block4=createSprite(700,580,195,15);
block4.shapeColor="yellow";

    //create box sprite and give velocity
    ball=createSprite(random(20,750));
    ball.shapeColor="white";
    ball.scale=0.3
    ball.velocityX=-5;
    ball.velocityY=7

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges=createEdgeSprites()
ball.bounceOff(edges);



   //add condition to check if box touching surface and make it box

if (block1.isTouching(ball) && ball.bounceOff(block1)){
    ball.shapeColor="green";
    music.play();
}
  
if (block2.isTouching(ball)){
    ball.shapeColor="red";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}

if (block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor="blue";
   
}

if (block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor="yellow";
    
}

drawSprites();


    
}
