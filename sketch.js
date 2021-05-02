var gardenImg, garden;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;


function preload() {
    gardenImg = loadImage("garden.png");
    
    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");

    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,500);
    garden.addImage(gardenImg)

    cat = createSprite(850,680);
    cat.addImage(catImg1)
    cat.scale = 0.16;

    mouse = createSprite(150,680);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.16;
}

function draw() {

    background(255);

    if(keyDown("LEFT_ARROW")) {
        mouse.addAnimation("mouseteasing", mouseImg2);
        mouse.changeAnimation("mouseteasing");
        mouse.frameDelay = 10;

        cat.addAnimation("cat_running", catImg2);
        cat.changeAnimation("cat_running");
        cat.velocityX = -5;

    }
    
    if(cat.x-mouse.x < (cat.width - mouse.width)/2) {
        mouse.addImage("happy_mouse", mouseImg3);
        mouse.changeImage("happy_mouse");
        cat.x = 290;

        cat.addImage("happy_cat", catImg3);
        cat.changeImage("happy_cat");
        cat.velocityX = 0;
    }
    drawSprites();
}
