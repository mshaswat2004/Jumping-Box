var canvas;
var music;
var surface1, surface2, surface3, surface4 ;
var box;
var boundary1, boundary2, boundary3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     surface1=createSprite(700,585,185,20);
     surface1.shapeColor='red';
     surface2=createSprite(500,585,185,20);
     surface2.shapeColor='blue';
     surface3=createSprite(300,585,185,20);
     surface3.shapeColor='yellow';
     surface4=createSprite(100,585,185,20);
     surface4.shapeColor='purple';

     boundary1=createSprite(799,590,10,1200);
     boundary1.visible=false;
     boundary2=createSprite(2,590,10,1200);
     boundary2.visible=false;
     boundary3=createSprite(620,5,1300,10);
     boundary3.visible=false;

    //create box sprite and give velocity
    box=createSprite(random(20,750));
    box.scale= 0.1;
    box.shapeColor="white";
    box.velocityY = 5;
    music.play();

}

function draw() {
    background(rgb(169,169,169));
    
    if(boundary1.isTouching(box) && box.bounceOff(boundary1)){
        box.shapeColor='white';
    }
    if(boundary2.isTouching(box) && box.bounceOff(boundary2)){
        box.shapeColor='white';
    }
    if(boundary3.isTouching(box) && box.bounceOff(boundary3)){
        box.shapeColor='white';
    }
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor='red';
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor='blue';
    }
     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor='purple';
    }
    if(surface3.isTouching(box)){
        box.shapeColor=rgb(225,18,0);
        box.velocityX = 0;
        music.stop();
    }

    drawSprites();
}
