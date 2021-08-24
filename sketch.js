var bg,bgImg;
var bottomground
var topGround
var balloon,balloonImg
var obstacleTop,obsTop1,obsTop2
var obstacleBottom,obsBottom1,obsBottom2,obsBottom3

function preload(){
    bgImg = loadImage("bg.png")
    balloonImg = loadAnimation("balloon1.png","balloon2.png","balloon3.png");

    obsTop1 = loadImage("obsTop1.png")
    obsTop2 = loadImage("obsTop2.png")

    obsBottom1 = loadImage("obsBottom1.png")
    obsBottom2 = loadImage("obsBottom2.png")
    obsBottom3 = loadImage("obsBottom3.png")

}

function setup(){
    createCanvas(1200,600);
    
    bg = createSprite(165,485,1,1)
    bg.addImage(bgImg)
    bg.scale = 1.8
     
    bottomGround = createSprite(200,390,800,20)
    bottomGround.visible = false;

    topGround = createSprite(200,10,800,20)
    topGround.visible = false;

    balloon = createSprite(100,200,20,50)
    balloon.addAnimation("balloon",balloonImg)
    balloon.scale = 0.3
}


function draw(){
    background("green")
     
    //making the air balloon to jump
    if(keyDown("space")){
        balloon.velocityY = -6;

    }

    balloon.velocityY = balloon.velocityY + 2;

    Bar();

    drawSprites();

    //spawning top obstacles
    spawnObstaclesTop();

}


function spawnObstaclesTop()
{
    if( World.frameCount % 60===0){
        obstacleTop = createSprite(400,50,40,50)

        //obstacleTop.addImage(obsTop1);

        obstacleTop.scale = 0.1;
        obstacleTop.velocityX = -4;


        obstacleTop.y = Math.round(randam(10,100));


        var rand = Math.round(randam(1,2));
        switch(rand){
            case 1: obstacleTop.addImage(obsTop1);
            break;
            case 2: obstacleTop.addImage(obsTop2);
            break;
            default: break;
        }

        //assign lifetime to the variable
        obstacleTop.lifetime = 100

        balloon.depth = balloon.depth + 1;
    }
}

function Bar()
{
    if(World.frameCount % 60===0)
    {
        var bar = createSprite(400,200,10,800);
        bar.velocityX = -6
        bar.depth = balloon.depth;
        bar.lifetime = 70
        bar.visible = false
    }
}