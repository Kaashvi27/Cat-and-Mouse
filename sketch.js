var cat, catimg1, catimg2, catimg3;
var mouse, mouseimg1, mouseimg2, mouseimg3;
var garden, gardenimg;
function preload() {
    //load the images here
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    

    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
    

    gardenimg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   //garden = createSprite(100,200,1000,800);
   //garden.addImage(gardenimg);
   //garden.scale = 2.5;

   cat = createSprite(900,700);
   cat.addAnimation("cat_walking", catimg2);
   cat.scale = 0.2;

   mouse = createSprite(300,700);
   mouse.addAnimation("mouse_teasing", mouseimg2);
   mouse.scale = 0.2;
   
}

function draw() {
background(gardenimg);
    
    //Write condition here to evalute if tom and jerry collide
        if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
            cat.velocityX = 0;
            cat.addAnimation("cat_3", catimg3);
            cat.x = 400;
            cat.scale = 0.2;
            cat.changeAnimation("cat_3");
            mouse.addAnimation("mouse_3", mouseimg3);
            mouse.changeAnimation("mouse_3");
            mouse.scale = 0.2;
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catimg2);
      cat.changeAnimation("catRunning");
  }

}
