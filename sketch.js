function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  move=loadAnimation("images/move.png","images/move1.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");

}

function setup() {

  createCanvas(800,400) 
  createSprite(400, 200, 50, 50);
  astronot=createSprite(300,200);
  astronot.addAnimation("sleeping",sleep);
 astronot. scale=0.1;
}

function draw() {
  background(bg); 
  drawSprites(); 
  textSize(20);
  fill("White");
  text("Instruction",20,45);
  text("Brushing",20,75);
  text("Gymming",20,95);
  text("Eating",20,125);
  text("Bathing",20,150);
  text("Moving",20,175);
  edges=createEdgeSprites();
  astronot.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronot.addAnimation("brushing",brush);
    astronot.changeAnimation("brushing");
    astronot.y=350;
    astronot.velocityX=0;
    astronot.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronot.addAnimation("gymming",gym);
    astronot.changeAnimation("gymming");
    astronot.y=350;
    astronot.velocityX=0;
    astronot.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronot.addAnimation("eating",eat);
    astronot.changeAnimation("eating");
    astronot.y=350;
    astronot.velocityX=0;
    astronot.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronot.addAnimation("bathing",bath);
    astronot.changeAnimation("bathing");
    astronot.y=350;
    astronot.velocityX=0;
    astronot.velocityY=0;
  }
  if(keyDown("m")){
    astronot.addAnimation("moving",move);
    astronot.changeAnimation("moving");
    
    astronot.velocityX=1;
    astronot.velocityY=1;

  }
    
  
  


  

 
}
