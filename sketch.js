var sun , sun_animation , planet1 , planet2,planet3, planets,check1,check2,check3,check4,x , frames;

function preload () {
sun_animation = loadImage("sun.png");
planets = loadImage ("planet.png");
}
//  canvas - 1550 , 715

function setup() {
  createCanvas(1550,715);
  
  x =  createEdgeSprites();
  
  
  
  sun = createSprite(775,357.5,2,2);
  sun.addImage ("su" , sun_animation);
  

  planet1 = createSprite (1100, 357.5,2,2);
planet1.addImage ("p" , planets );
  planet1.scale = 0.5;

  planet2 = createSprite (775-325, 357.5,2,2);
  planet2.addImage ("pl" , planets );
   planet2.scale = 0.5;
  
 check1 = createSprite (1100,125,10,10);
  check2 = createSprite (450 ,125,10,10);
  check3 = createSprite (450 , 357+250,10,10);
  check4 = createSprite (1100 , 357+250,10,10);
  
   planet1.velocityY=-8;
  planet2.velocityY = 8;
 

  planet1.setCollider ("circle",0,0,4);
   planet2.setCollider ("circle",0,0,4);
  sun.setCollider ("circle",0,0,105);
  
  
  
  // planet2.velocityY=8;
  //planet2.velocityX=2;
  
   
}

function draw() {
  background(255);  
  
  frames = 1 * frameCount;
  sun.scale = 0.5 + 0.0020 * frames;
  
  if (planet1.isTouching (check1)){
    planet1.velocityY = 0 ;
    planet1.velocityX = -8;
  }
  
   if (planet1.isTouching (check2)){
    planet1.velocityY = 8 ;
    planet1.velocityX = 0;
  }
  
   if (planet1.isTouching (check3)){
    planet1.velocityY = 0 ;
    planet1.velocityX = 8;
  }
  
   if (planet1.isTouching (check4)){
    planet1.velocityY = -8 ;
    planet1.velocityX = 0;
  }
  
    if (planet2.isTouching (check1)){
    planet2.velocityY = 0 ;
    planet2.velocityX = -8;
  }
  
   if (planet2.isTouching (check2)){
    planet2.velocityY = 8 ;
    planet2.velocityX = 0;
  }
  
   if (planet2.isTouching (check3)){
    planet2.velocityY = 0 ;
    planet2.velocityX = 8;
  }
  
   if (planet2.isTouching (check4)){
    planet2.velocityY = -8 ;
    planet2.velocityX = 0;
  }
 
  
  planet1.bounceOff (x);
  planet2.bounceOff (x);
  
  if (planet1.isTouching(sun)) {
    planet1.destroy();
  }
  
  if (planet2.isTouching(sun)) {
    planet2.destroy();
  }
  
  
  drawSprites();
  

  
}

